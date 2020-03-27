import React,{Component} from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from '../../containers/issues/Issues';
import "./Opensource.css";


class Opensource extends Component {
    render() {
        return (
					<div className="opensource-main">
						<Header />
						<Organizations />
						<OpensourceCharts />
						<PullRequests />
						<Issues />
						<Footer />
					</div>
				);
    }
}

export default Opensource;