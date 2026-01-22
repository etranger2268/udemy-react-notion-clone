import Image from 'next/image';

const Footer = () => {
  return (
    <div className="w-full border-t border-gray-100 p-3">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-sm font-medium">© udemy-react-notion-clone. All rights reserved.</p>
        <div>
          <a
            href="https://github.com/etranger2268/udemy-react-notion-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-slate-600 transition-colors hover:text-sky-600"
          >
            <Image
              src="/GitHub_Invertocat_Black_Clearspace.svg"
              alt="GitHub's icon"
              height={25}
              width={25}
            />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
