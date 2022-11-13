import { Stats } from "react-daisyui";
import { GrSecure, GrSettingsOption } from "react-icons/gr";

function LandingStats(){
    return(
        <Stats className="w-full stats-vertical lg:stats-horizontal shadow">
            <Stats.Stat>
                <Stats.Stat.Item variant="value"><GrSettingsOption/></Stats.Stat.Item>
                <Stats.Stat.Item variant="value">Easy to set up</Stats.Stat.Item>
                <Stats.Stat.Item variant="title">Invite family members via email and start sharing right away. <br></br>Get five accounts with your subscription and add <br></br>more users for $1/month each.</Stats.Stat.Item>
            </Stats.Stat>
    
            <Stats.Stat>
                <Stats.Stat.Item variant="value"><GrSecure/></Stats.Stat.Item>
                <Stats.Stat.Item variant="value">Uniquely secure.<br></br> Completely private</Stats.Stat.Item>
                <Stats.Stat.Item variant="title">Your data is end-to-end encrypted and only you have access <br></br>we can't see what you store in MyPass Manager or which sites you visit.</Stats.Stat.Item>
            </Stats.Stat>
        </Stats>
    );
}

export default LandingStats;