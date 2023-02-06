export const Footer = () => {
  return (
    <footer className="bg-slate-700 py-3 mt-20">
      <p className="text-white text-center text-sm lg:flex justify-center">
        Sitio web creado por Nicolas Potel Junot 2022.
        <div className="flex ml-1 justify-center mt-2 lg:mt-0">
          <p className="mr-2">Contacto:</p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nicolas-poteljunot/"
            className="mr-1"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              className="h-5"
              alt="linkedin"
            />
          </a>
          <a
            target="_blank"
            href="https://nicolas-potel-junot.vercel.app/"
            className="mr-1"
          >
            <img
              src="https://cdn.pixabay.com/photo/2020/09/17/22/52/website-5580513_1280.png"
              className="h-5 bg-blue-200 rounded-full"
              alt="portfolio"
            />
          </a>
        </div>
      </p>
    </footer>
  );
};
