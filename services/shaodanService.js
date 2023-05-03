import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useShodanData = () => {


    async function getIP() {
        const { data } = await axios.get(
            "https://what-is-my-ip.functionapi.workers.dev"
        );
        return data;
    }

    const shodanData = async (ip) => {
        const { data } = await axios.get(
            `https://api.shodan.io/shodan/host/${(ip && ip) || "103.78.237.6"}?key=MuWfcU97yw8u9XP08ZsROsYTiny7Ibcx`
        );
        return data;
    }



    const { data: ip } = useQuery(
        ["ip"], () => getIP(),
        {
            staleTime: Infinity, 
        }
    );

    const { data: shodan, isLoading, error } = useQuery(
        ["shodanData", ip], () => shodanData(ip),
        {
            enabled: !!ip,
            staleTime: Infinity,
            refetchOnWindowFocus: false,
        }
    );

    return {
        shodanData: shodan,
        isLoading,
        error,
    };
};
