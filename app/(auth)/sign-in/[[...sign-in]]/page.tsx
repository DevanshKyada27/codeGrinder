import { SignIn } from '@clerk/nextjs'
import Image from 'next/image' // Import the Image component

export default function Page() {
  return (
    // Main container: full screen, grid layout (2 columns on large screens)
    // Dark background from your screenshot
    <div className="grid h-screen lg:grid-cols-2 bg-[#020202]"> {/* Deep dark purple/blue from screenshot */}
      
      {/* --- Column 1: Pixel Art Visual Side (Hidden on small screens) --- */}
      <div className="hidden lg:flex flex-col justify-center items-center p-12 bg-[#020202] text-white"> {/* Slightly lighter dark background */}
        <h1 className="text-5xl font-extrabold mb-4 text-yellow-400 text-shadow-md font-game"> {/* Gold-ish yellow for headings */}
          Good To See You Back, Coder!
        </h1>
        <p className="text-2xl text-[#ADD8E6] text-shadow-sm font-game"> {/* Light blue for secondary text */}
          Log in to continue your journey.
        </p>
        
        {/* Pixel art GIF/Image from public folder */}
        <div className="mt-12 w-full max-w-xl h-auto flex items-center justify-center">
            <Image
                src="/signin.gif" // <--- Place your GIF/Image in the 'public' folder
                alt="Pixel art coding illustration"
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
                objectFit="contain" // Ensures the image fits within its bounds
                className="rounded-lg shadow-xl"
            />
        </div>
      </div>

      {/* --- Column 2: Sign-In Form Side (Darker background for the form panel) --- */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 bg-[#020202]"> {/* Darker background for the form area */}
        <div className="w-full max-w-md">
            {/* The actual Clerk component will inherit the centering from the parent div */}
            <SignIn />
        </div>
      </div>
    </div>
  )
}