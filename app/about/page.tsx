import Members from "../components/about-details/members";
import Recognitions from "../components/about-details/recognition";
import Talents from "../components/about-details/talents";
import Team from "../components/about-details/team";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-9xl overflow-x-clip">
      <Talents />
      <Team />
      <Recognitions />
      <Members />
    </main>
  );
}
