import Image from "next/image";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";

export default function Home() {
  return (<div>
      <Container>
        <div className="p-8">
          <HomeBanner></HomeBanner>
        </div>
      </Container>
    </div>
  );
}
