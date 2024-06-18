const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
			{children}
		</main>
	);
};

export default HomeLayout;
