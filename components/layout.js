import { Fragment } from "react";
import Header from "./header";
import socialData from "../data/socialData";
import Footer from "./footer";
import BottomText from "./bottom-text";

function Layout(props) {
return <Fragment>
    <Header />
    <main>
        {props.children}
        {/* это значит что внутри будет то, что между <mainfragment>ВОТ ЭТО</mainfragment> */}
    </main>
    <Footer items={socialData} />
      <BottomText />

</Fragment>
}

export default Layout;