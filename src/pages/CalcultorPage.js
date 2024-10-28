import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { PageHeader } from '../components/header/PageHeader';
import UniversityFilter from './UniversityFilter';
export const BudgetPage = () => {
    return (
        <>

            <div className="container-xxl bg-white p-0">
                <Header />
                <PageHeader PageHeading="Find unversity according your budget" PageName="Find Unversity"/>
                 <UniversityFilter/>
                <Footer/>
            </div>


        </>
    )
}