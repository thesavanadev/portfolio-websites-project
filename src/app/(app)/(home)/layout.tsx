const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
			{children}
		</main>
	);
};

export default HomeLayout;
