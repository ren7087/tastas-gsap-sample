import ScrollCard from "../molecles/ScrollCard";
import { ManagementTeamData } from "../../constants";

const Management = () => {
  return (
    <>
      <div className="pt-12 pb-5 overflow-hidden bg-white">
        <div className="flex whitespace-nowrap title">
          <p className="font-bold text-2xl ml-8 mr-5 md:text-7xl">Management</p>
          <p className="font-bold hidden md:mt-20">マネジメントチーム</p>
        </div>
      </div>
      <ScrollCard managementTeam={ManagementTeamData} />
    </>
  );
};

export default Management;
