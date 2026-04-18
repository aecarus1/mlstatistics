export default function BottomShade() {
    return (
        <div className="fixed bottom-0 left-0 w-screen h-16 pointer-events-none bg-background/40"
            style={{
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                maskImage: "linear-gradient(to top, black 30%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 100%)",
            }}
        />
    )
}