import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center">
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-white font-bolder hover:text-red-400">
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-white font-bolder hover:text-red-400">
              License
            </Typography>
          </li>

          <li>
            <Typography
              as="a"
              href="#"
              className="text-white font-bolder hover:text-red-400">
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography className="text-center font-bolder text-white">
        &copy; 2023 Petra Juliansen M
      </Typography>
    </footer>
  );
}
