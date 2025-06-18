

export default function Navbar() {

    return (
        <header className="w-full max-w-5xl mx-auto flex justify-between items-center py-8 px-8">
        <div className="text-2xl font-bold text-gray-900">Edu.</div>
        
        <button className="ml-6 px-6 py-2 bg-[#6b63ff] hover:bg-[#574fd6] transition text-white rounded-full font-semibold shadow">
          Baixar CV
        </button>
      </header>
    );
}