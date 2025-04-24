import {BarChart2, ShoppingBag, Users, Zap} from "lucide-react";
import {motion} from "framer-motion";

import Header from "../components/common/Header.jsx";
import StatCard from "../components/common/StatCard.jsx";
import SalesOverviewChart from "../components/overview/SalesOverviewChart.jsx";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart.jsx";
import SalesChannelChart from "../components/overview/SalesChannelChart.jsx";

const OverviewPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Overview'/>

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}>
                    <StatCard
                    name='Total Sales' value='$12,345' icon={Zap} color='#6366f1'/>
                    <StatCard
                        name='New Users' value='1,234' icon={Users} color='#8B5CF6'/>
                    <StatCard
                        name='Total Products' value='567' icon={ShoppingBag} color='#EC4899'/>
                    <StatCard
                        name='Conversion Rate' value='12,5%' icon={BarChart2} color='#10B981'/>

                </motion.div>

                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
                    <SalesOverviewChart />
                    <CategoryDistributionChart />
                    <SalesChannelChart />
                </div>

            </main>
        </div>
    )
}
export default OverviewPage
