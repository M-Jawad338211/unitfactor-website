Next.js Static Portfolio to WordPress Root Deployment Guide

This guide provides the steps to deploy a Next.js static build into a public_html folder that already contains a WordPress installation. This "Root-Level Merger" allows Next.js to handle the primary site pages while WordPress handles the Blog and Insights sections.

1. Next.js Configuration (next.config.js)

Ensure your configuration is set up for a static export with trailing slashes. This ensures that a page like about is exported as about/index.html, which is highly compatible with Apache's folder-based routing.

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // Crucial for folder-based routing
  images: {
    unoptimized: true, // Static exports do not support image optimization
  },
};

export default nextConfig;


2. Navigation Strategy

Because this is a hybrid environment without a Node.js server, do not use the Next.js <Link> component for primary site navigation.

The Issue: <Link> attempts to fetch client-side data bundles (.txt or .json) that do not exist in a static environment, causing 404 errors in the browser console.

The Solution: Use standard HTML <a> tags for your main navigation links (e.g., <a href="/contacts/">Contacts</a>).

3. Build and Upload Process

Build locally: Run npm run build.

Verify Structure: Check the out folder. You should see index.html and directories for each page (e.g., contacts/index.html).

Upload via FTP:

Connect to your server (e.g., using FileZilla).

Navigate to the public_html directory.

Keep existing WordPress folders (wp-admin, wp-content, wp-includes).

Keep the index.php file (needed for the Blog).

Upload the contents of the Next.js out folder directly into the public_html root.

4. Server Configuration (.htaccess) (Currently, it's already setup)

Edit the .htaccess file in your public_html root. Place this logic at the very top, before the # BEGIN WordPress block. This manages the "handoff" between the two systems.

# --- NEXT.JS + WORDPRESS HYBRID LOGIC ---
RewriteEngine On
RewriteBase /

# 1. PRIORITY: Force index.html for the root domain
# This makes Next.js the primary homepage.
DirectoryIndex index.html index.php
RewriteRule ^$ index.html [L]

# 2. FOLDER MAPPING: Map clean URLs to folder-based index.html files
# This prevents 403 Forbidden errors when visiting /contacts or /portfolio.
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
RewriteRule ^(.*)/?$ $1/index.html [L]

# 3. WORDPRESS BYPASS: Let WP handle its own core folders and Blog
# If the URL contains these keywords, skip Next.js and let WordPress run.
RewriteRule ^(blog|insights|wp-admin|wp-content|wp-includes|wp-login.php|xmlrpc.php) - [L]

# --- END NEXT.JS LOGIC ---

# [Standard WordPress Block Follows Here...]


5. Cache Management (Crucial for SiteGround)

If you see the old WordPress site after deploying, it is due to server-side caching.

NGINX Direct Delivery: Log into your hosting panel (e.g., SiteGround Site Tools) and turn OFF NGINX Direct Delivery.

Flush Cache: Manually "Flush" or "Purge" the Dynamic Cache and Memcached in your hosting dashboard.

Cloudflare: If using Cloudflare, log in and select Purge Everything.

Verification: Test your site using an Incognito window or by adding a query string to the URL (e.g., yourwebsite.org/?test=1).

