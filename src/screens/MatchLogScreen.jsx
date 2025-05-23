export default function MatchLogScreen({ playersData, isLoading }) {
  if (isLoading) return;
  
  return (
    <div className="flex flex-col gap-4 h-full w-full pl-32 pt-12">
      <h2 className="text-white font-bold text-3xl italic mb-2">MATCH LOG</h2>
      <div className="w-[70%] bg-[#d6bfa6] rounded-sm overflow-hidden shadow-lg">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="border-b border-gray-500">
              <th className="px-6 py-3 text-lg font-bold text-gray-800">
                Player
              </th>
              <th className="px-6 py-3 text-lg font-bold text-gray-800 text-center">
                Difficulty
              </th>
              <th className="px-6 py-3 text-lg font-bold text-gray-800 text-center">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {playersData.map((player) => (
              <tr key={player}>
                <td className="px-6 py-3 text-white">{player.name}</td>
                <td className="px-6 py-3 text-white text-center">
                  {player.mode}
                </td>
                <td className="px-6 py-3 text-white text-center">
                  {player.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
