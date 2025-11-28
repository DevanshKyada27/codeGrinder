import { SignUp } from '@clerk/nextjs'
import Image from 'next/image' // Import the Image component

export default function Page() {
  return (
    // Main container: full screen, grid layout (2 columns on large screens)
    // Dark background from your screenshot
    <div className="grid h-screen lg:grid-cols-2 bg-[#020202]"> {/* Deep dark purple/blue from screenshot */}
      
      {/* --- Column 1: Sign-Up Form Side (Darker background for the form panel) --- */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 bg-[#020202] order-2 lg:order-1"> {/* Darker background for the form area */}
        <div className="w-full max-w-md">
            <SignUp />
        </div>
      </div>
      
      {/* --- Column 2: Pixel Art Visual Side (Hidden on small screens) --- */}
      <div className="hidden lg:flex flex-col justify-center items-center p-12 bg-[#020202] text-white order-1 lg:order-2"> {/* Slightly lighter dark background */}
        <h1 className="text-5xl font-extrabold mb-4 text-yellow-400 text-shadow-md font-game"> {/* Bright green for headings */}
          Join the CodeGrinder Crew!
        </h1>
        <p className="text-2xl text-[#ADD8E6] text-shadow-sm font-game"> {/* Light blue for secondary text */}
          Create an account and level up your skills.
        </p>
        
        {/* Pixel art GIF/Image from public folder */}
        <div className="mt-12 w-full max-w-xl h-auto flex items-center justify-center">
            <Image
                src="/signup.jpeg" // <--- Place another GIF/Image in the 'public' folder
                alt="Pixel art registration illustration"
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
                objectFit="contain" // Ensures the image fits within its bounds
                className="rounded-lg shadow-xl"
            />
        </div>
      </div>
    </div>
  )
}