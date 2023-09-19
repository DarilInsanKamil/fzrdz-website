import Image from "next/image";

export const MedsosUI = ({ icon, alt }) => {
    return (
      <div>
        <Image src={icon} alt={alt} width={24} height={24} style={{objectFit:"contain"}}/>
      </div>
    );
  };
  