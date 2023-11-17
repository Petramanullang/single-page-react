import { Typography } from "@material-tailwind/react";

export default function Footer({ footList }) {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center">
        <div className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {footList.map((footer) => (
            <span className="text-white cursor-pointer hover:text-red-400">{footer}</span>
          ))}
        </div>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography className="text-center font-bolder text-white">
        &copy; 2023 Petra Juliansen M
      </Typography>
    </footer>
  );
}
