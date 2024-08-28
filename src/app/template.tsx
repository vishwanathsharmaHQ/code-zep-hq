import PageTransition from "@/components/transitions/PageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
    return <div>{children}
        <PageTransition />
    </div>
}