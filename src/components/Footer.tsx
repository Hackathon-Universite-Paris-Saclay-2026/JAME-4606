export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-black py-4 mt-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center">
          <span className="text-sm sm:text-base font-bold text-black">Paris-Saclay University</span>
          <span className="hidden sm:inline font-bold text-black">-</span>
          <span className="text-xs sm:text-base font-bold text-black">Emmanuelle, Mathusan, Aleksandra, Jewin</span>
        </div>
    </footer>
  );
}