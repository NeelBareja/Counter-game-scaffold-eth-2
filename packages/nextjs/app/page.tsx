"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const { data: counter } = useScaffoldReadContract({
    contractName: "YourContract",
    functionName: "counter"
  })

  const { data: owner } = useScaffoldReadContract({
    contractName: "YourContract",
    functionName: "owner"
  })

  const { writeContractAsync } = useScaffoldWriteContract({ contractName: "YourContract" })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Counter Game
            </h1>
            <p className="text-gray-300 text-lg">Welcome to the interactive counter experience</p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-200">Connected Address</h2>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <Address address={connectedAddress} />
              </div>
            </div>

            <div className="bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-200">Owner Address</h2>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <Address address={owner} />
              </div>
            </div>

            <div className="bg-gray-700/30 rounded-xl p-8 backdrop-blur-sm text-center">
              <div className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {counter}
              </div>
              <div className="flex justify-center gap-4">
                <button 
                  className="btn bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg rounded-xl transform transition hover:scale-105 shadow-lg"
                  onClick={() => writeContractAsync({ functionName: "inc" })}
                >
                  Increment
                </button>
                <button 
                  className="btn bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg rounded-xl transform transition hover:scale-105 shadow-lg"
                  onClick={() => writeContractAsync({ functionName: "dec" })}
                >
                  Decrement
                </button>
              </div>
            </div>

            <div className="text-center mt-8">
              {connectedAddress?.toLowerCase() === owner?.toLowerCase() ? (
                <div className="space-y-4">
                  <p className="text-green-400 font-semibold text-lg">You are the owner</p>
                  <button
                    className="btn bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 text-lg rounded-xl transform transition hover:scale-105 shadow-lg"
                    onClick={() => writeContractAsync({ functionName: "reset" })}
                  >
                    Reset Counter
                  </button>
                </div>
              ) : (
                <p className="text-red-400 font-semibold text-lg">You are not the owner</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
