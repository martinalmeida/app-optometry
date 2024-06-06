export default function Error404() {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c82b5815-a4a2-4540-8dcd-d9fa8166dafa/da0pcnv-6c2bf553-576c-490c-ba3e-8316ee8b1002.jpg/v1/fill/w_1192,h_670,q_70,strp/minimal_atom_wallpaper_1920x1080_by_dssdiego_da0pcnv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2M4MmI1ODE1LWE0YTItNDU0MC04ZGNkLWQ5ZmE4MTY2ZGFmYVwvZGEwcGNudi02YzJiZjU1My01NzZjLTQ5MGMtYmEzZS04MzE2ZWU4YjEwMDIuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.11121GfoHNufVhRYdrmGAhugaMTkejzG3g-tB-e95sI"
        className="absolute h-full w-full object-cover"
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>

      <div className="w-full font-mono flex flex-col items-center relative z-10">
        <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
          Lo sentimos la pagina que estabas buscando no existe
        </h1>

        <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
          404
        </p>
      </div>
    </div>
  );
}
