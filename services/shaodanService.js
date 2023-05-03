import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const IP_STORAGE_KEY = "ip";


export const useShodanData = () => {


    const getIP = async () => {
        let ip = localStorage.getItem(IP_STORAGE_KEY);
        if (!ip) {
            const { data } = await axios.get(
                "https://what-is-my-ip.functionapi.workers.dev"
            );
            ip = data;
            localStorage.setItem(IP_STORAGE_KEY, ip);
        }
        return ip;
    };

    const shodanData = async (ip) => {

        const { data } = await axios.get(`https://api.shodan.io/shodan/host/${(ip && ip) || "103.78.237.6"}?key=MuWfcU97yw8u9XP08ZsROsYTiny7Ibcx`);

        return data;
    };

    setTimeout(() => {
        localStorage.removeItem(IP_STORAGE_KEY);
    }, 30 * 60 * 1000);


    const { data: ip, isLoading } = useQuery(["ip"], () => getIP(), {
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        keepPreviousData: false,
    });

    const { data: shodan, error, isFetching } = useQuery(
        ["shodanData", ip],
        () => shodanData(ip),
        {
            enabled: !!ip,
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            keepPreviousData: false,
        }
    );


    return {
        shodanData: shodan,
        isLoading,
        error,
    };
};

