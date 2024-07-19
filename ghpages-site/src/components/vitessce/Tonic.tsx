import { Vitessce } from "vitessce";
import generateTonicConfig from "@/components/vitessce/configs/tonic";

export default function Tonic({ fov }: { fov: string }) {
    const tonic_config = generateTonicConfig(fov);
    return <Vitessce config={tonic_config} theme="dark" />;
}
