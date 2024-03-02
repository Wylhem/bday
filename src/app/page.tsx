import {Landing} from "@/app/components/landing/landing";
import {Templating} from "@/app/components/template/templating";

export default function Home() {
  return (
      <>
        <div className={"bg-[#C6AEAE]"}>
          <Landing/>
          <Templating/>
        </div>

      </>)
}
