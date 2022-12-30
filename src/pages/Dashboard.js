import TicketCard from '../components/TicketCard'

const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Safety 101 Videos',
            owner: 'Joe Mama',
            avatar: 'http://www.henhunt.co.uk/wp-content/uploads/2014/10/Person-Logo-1.png',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video on NFTs',
            timestamp: '2022-02-11T07:36:17+0000'
        },
        {
            category: 'Q2 2022',
            color: 'blue',
            title: 'Build and Sell AI Model',
            owner: 'Joe Mama',
            avatar: 'http://www.henhunt.co.uk/wp-content/uploads/2014/10/Person-Logo-1.png',
            status: 'working on it',
            priority: 2,
            progress: 70,
            description: 'Make a video on AI',
            timestamp: '2022-02-11T07:36:17+0000'
        },
    ]

    const colors = [
        'rgb(255, 179, 186)',
        'rgb(255, 223, 186)',
        'rgb(255, 255, 186)',
        'rgb(186, 255, 201)',
        'rgb(186, 255, 255)',
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category))
    ]

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory).map((filteredTicket, _index) => (
                            <TicketCard
                                id={_index}
                                color={colors[categoryIndex] || colors[0]}
                                ticket={filteredTicket}
                            />
                        ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard;