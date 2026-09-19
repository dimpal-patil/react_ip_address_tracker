import type { IPData } from "../types/ip";

interface InfoContainerProps {
    data: IPData | null;
    loading: boolean;
    error: string;
}

function InfoContainer({
    data,
    loading,
    error,
}: InfoContainerProps) {
    return (
    <section
        className="
        relative
        z-10
        mx-auto
        -mt-[60px]
        -mb-[100px]
        flex
        max-w-[1100px]
        rounded-[10px]
        bg-white
        p-[30px]
        shadow-[0_5px_15px_rgba(0,0,0,0.1)]
        max-md:mx-5
        max-md:mt-[-50px]
        max-md:mb-0
        max-md:flex-col
        max-md:p-5
    "
    >
    {loading && (
        <p className="w-full text-center text-gray-500">
        Loading...
        </p>
    )}

      {error && (
        <p className="w-full text-center text-red-500">
          {error}
        </p>
      )}

      {!loading && !error && (
        <>
          <div
            className="
              flex-1
              border-r
              border-[#ddd]
              px-[25px]
              first:pl-0
              max-md:border-r-0
              max-md:px-[10px]
              max-md:py-[10px]
            "
          >
            <p className="text-xs font-bold uppercase tracking-[1px] text-[#777]">
              IP Address
            </p>

            <h2 className="mt-[10px] text-lg">
              {data?.ip ?? "---"}
            </h2>
          </div>

          <div
            className="
              flex-1
              border-r
              border-[#ddd]
              px-[25px]
              max-md:border-r-0
              max-md:px-[10px]
              max-md:py-[10px]
            "
          >
            <p className="text-xs font-bold uppercase tracking-[1px] text-[#777]">
              Location
            </p>

            <h2 className="mt-[10px] text-lg">
              {data
                ? `${data.location.city}, ${data.location.region}, ${data.location.country}`
                : "---"}
            </h2>
          </div>

          <div
            className="
              flex-1
              border-r
              border-[#ddd]
              px-[25px]
              max-md:border-r-0
              max-md:px-[10px]
              max-md:py-[10px]
            "
          >
            <p className="text-xs font-bold uppercase tracking-[1px] text-[#777]">
              Timezone
            </p>

            <h2 className="mt-[10px] text-lg">
              {data
                ? `UTC ${data.location.timezone}`
                : "---"}
            </h2>
          </div>

          <div
            className="
              flex-1
              px-[25px]
              last:pr-0
              max-md:px-[10px]
              max-md:py-[10px]
            "
          >
            <p className="text-xs font-bold uppercase tracking-[1px] text-[#777]">
              ISP
            </p>

            <h2 className="mt-[10px] break-words text-lg">
              {data?.isp ?? "---"}
            </h2>
          </div>
        </>
      )}
    </section>
  );
}

export default InfoContainer;