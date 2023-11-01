import SideNavBar from "@/components/ui/SideNav";

export default function ({ children }: { children: React.ReactNode }) {
    return (<div className="flex h-screen flex-col md:flex-row md:overflow-hidden md:w-screen ">
        <div className={`md:w-[15%]`}>
        <SideNavBar />
        </div>
        <div className=" flex-grow">
            {children}
        </div>
    </div>)
}