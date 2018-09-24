// When replacing values, always prefix with eq for UID

export const categories = [
    { id: "eqDEFAULT", title: "(Default)", parent: null },
    {
        id: "eq17000000",
        title: "Architecture and Engineering",
        parent: null
    },
    {
        id: "eq17100000",
        title: "Architect, Surveyor and Cartographer",
        parent: "eq17000000"
    },
    {
        id: "eq17101100",
        title: "Architect, Except Landscape and Naval",
        parent: "eq17100000"
    },
    {
        id: "eq17101200",
        title: "Landscape Architect",
        parent: "eq17100000"
    },
    {
        id: "eq17102100",
        title: "Cartographer and Photogrammetrist",
        parent: "eq17100000"
    },
    {
        id: "eq17102200",
        title: "Surveyor",
        parent: "eq17100000"
    },
    {
        id: "eq17200000",
        title: "Engineers",
        parent: "eq17000000"
    },
    {
        id: "eq17201100",
        title: "Aerospace Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17202100",
        title: "Agricultural Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17203100",
        title: "Biomedical Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17204100",
        title: "Chemical Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17205100",
        title: "Civil Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17206100",
        title: "Computer Hardware Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17206151",
        title: "IT Project Managers",
        parent: "eq17206100"
    },
    {
        id: "eq17207100",
        title: "Electrical Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17207200",
        title: "Electronics Engineer, Except Computer",
        parent: "eq17200000"
    },
    {
        id: "eq17208100",
        title: "Environmental Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17211100",
        title: "Health and Safety Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17211101",
        title: "Industrial Safety and Health Engineers",
        parent: "eq17211100"
    },
    {
        id: "eq17211102",
        title: "Fire-Prevention and Protection Engineers",
        parent: "eq17211100"
    },
    {
        id: "eq17211103",
        title: "Product Safety Engineers",
        parent: "eq17211100"
    },
    {
        id: "eq17211200",
        title: "Industrial Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17212100",
        title: "Marine Engineer and Naval Architect",
        parent: "eq17200000"
    },
    {
        id: "eq17213100",
        title: "Materials Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17214100",
        title: "Mechanical Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17215100",
        title: "Mining and Geological Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17216100",
        title: "Nuclear Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17217100",
        title: "Petroleum Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17217151",
        title: "Petroleum Process Engineers",
        parent: "eq17217100"
    },
    {
        id: "eq17217152",
        title: "Petroleum Systems Engineers",
        parent: "eq17217100"
    },
    {
        id: "eq17217153",
        title: "Petroleum Field Engineers",
        parent: "eq17217100"
    },
    {
        id: "eq17217154",
        title: "Petroleum Project Managers",
        parent: "eq17217100"
    },
    {
        id: "eq17219900",
        title: "Engineer",
        parent: "eq17200000"
    },
    {
        id: "eq17300000",
        title: "Drafters, Engineering, and Mapping Technicians",
        parent: "eq17000000"
    },
    {
        id: "eq17301100",
        title: "Architectural and Civil Drafter",
        parent: "eq17300000"
    },
    {
        id: "eq17301200",
        title: "Electrical and Electronics Drafter",
        parent: "eq17300000"
    },
    {
        id: "eq17301300",
        title: "Mechanical Drafter",
        parent: "eq17300000"
    },
    { id: "eq17301900", title: "Drafter", parent: "eq17300000" },
    {
        id: "eq17302100",
        title: "Aerospace Engineering and Operations Technician",
        parent: "eq17300000"
    },
    {
        id: "eq17302200",
        title: "Civil Engineering Technician",
        parent: "eq17300000"
    },
    {
        id: "eq17302300",
        title: "Electrical and Electronic Engineering Technician",
        parent: "eq17300000"
    },
    {
        id: "eq17302400",
        title: "Electro-Mechanical Technician",
        parent: "eq17300000"
    },
    {
        id: "eq17302500",
        title: "Environmental Engineering Technician",
        parent: "eq17300000"
    },
    {
        id: "eq17302600",
        title: "Industrial Engineering Technician",
        parent: "eq17300000"
    },
    {
        id: "eq17302700",
        title: "Mechanical Engineering Technician",
        parent: "eq17300000"
    },
    {
        id: "eq17302900",
        title: "Engineering Technician",
        parent: "eq17300000"
    },
    {
        id: "eq17303100",
        title: "Surveying and Mapping Technician",
        parent: "eq17300000"
    },
    {
        id: "eq27000000",
        title: "Arts, Design, Entertainment, Sports and Media",
        parent: null
    },
    {
        id: "eq27100000",
        title: "Art and Design Workers",
        parent: "eq27000000"
    },
    {
        id: "eq27101100",
        title: "Art Director",
        parent: "eq27100000"
    },
    {
        id: "eq27101200",
        title: "Craft Artist",
        parent: "eq27100000"
    },
    {
        id: "eq27101300",
        title: "Fine Artist, Including Painter, Sculptor, and Illustrator",
        parent: "eq27100000"
    },
    {
        id: "eq27101302",
        title: "Sketch Artists",
        parent: "eq27101300"
    },
    {
        id: "eq27101303",
        title: "Cartoonists",
        parent: "eq27101300"
    },
    {
        id: "eq27101400",
        title: "Multi-Media Artist and Animator",
        parent: "eq27100000"
    },
    { id: "eq27101900", title: "Artist", parent: "eq27100000" },
    {
        id: "eq27102100",
        title: "Commercial and Industrial Designer",
        parent: "eq27100000"
    },
    {
        id: "eq27102200",
        title: "Fashion Designer",
        parent: "eq27100000"
    },
    {
        id: "eq27102300",
        title: "Floral Designer",
        parent: "eq27100000"
    },
    {
        id: "eq27102400",
        title: "Graphic Designer",
        parent: "eq27100000"
    },
    {
        id: "eq27102500",
        title: "Interior Designer",
        parent: "eq27100000"
    },
    {
        id: "eq27102600",
        title: "Merchandise Displayer and Window Trimmer",
        parent: "eq27100000"
    },
    {
        id: "eq27102700",
        title: "Set and Exhibit Designer",
        parent: "eq27100000"
    },
    {
        id: "eq27102900",
        title: "Designer",
        parent: "eq27100000"
    },
    {
        id: "eq27200000",
        title: "Entertainers and Performers, Sports and Related Workers",
        parent: "eq27000000"
    },
    { id: "eq27201100", title: "Actor", parent: "eq27200000" },
    {
        id: "eq27201200",
        title: "Producer and Director",
        parent: "eq27200000"
    },
    {
        id: "eq27201203",
        title: "Program Directors",
        parent: "eq27201200"
    },
    {
        id: "eq27201204",
        title: "Talent Directors",
        parent: "eq27201200"
    },
    {
        id: "eq27201205",
        title: "Technical Directors/Managers",
        parent: "eq27201200"
    },
    {
        id: "eq27202100",
        title: "Athlete and Sports Competitor",
        parent: "eq27200000"
    },
    {
        id: "eq27202200",
        title: "Coach or Scout",
        parent: "eq27200000"
    },
    {
        id: "eq27202300",
        title: "Umpire, Referee and  Sports Official",
        parent: "eq27200000"
    },
    { id: "eq27203100", title: "Dancer", parent: "eq27200000" },
    {
        id: "eq27203200",
        title: "Choregrapher",
        parent: "eq27200000"
    },
    {
        id: "eq27204100",
        title: "Music Director or Composer",
        parent: "eq27200000"
    },
    {
        id: "eq27204102",
        title: "Music Arrangers and Orchestrators",
        parent: "eq27204100"
    },
    {
        id: "eq27204200",
        title: "Musician or Singer",
        parent: "eq27200000"
    },
    {
        id: "eq27209900",
        title: "Entertainer, Performer or Sports Related Worker",
        parent: "eq27200000"
    },
    {
        id: "eq27300000",
        title: "Media and Communication Workers",
        parent: "eq27000000"
    },
    {
        id: "eq27301100",
        title: "Radio and Television Announcer",
        parent: "eq27300000"
    },
    {
        id: "eq27301200",
        title: "Public Address System and Other Announcer",
        parent: "eq27300000"
    },
    {
        id: "eq27302100",
        title: "Broadcast News Analyst",
        parent: "eq27300000"
    },
    {
        id: "eq27302200",
        title: "Reporter and Correspondent",
        parent: "eq27300000"
    },
    {
        id: "eq27303100",
        title: "Public Relations Specialist",
        parent: "eq27300000"
    },
    { id: "eq27304100", title: "Editor", parent: "eq27300000" },
    {
        id: "eq27304200",
        title: "Technical Writer",
        parent: "eq27300000"
    },
    {
        id: "eq27304300",
        title: "Writer and Author",
        parent: "eq27300000"
    },
    {
        id: "eq27304301",
        title: "Poets and Lyricists",
        parent: "eq27304300"
    },
    {
        id: "eq27304302",
        title: "Creative Writers",
        parent: "eq27304300"
    },
    {
        id: "eq27304303",
        title: "Caption Writers",
        parent: "eq27304300"
    },
    {
        id: "eq27304304",
        title: "Copy Writers",
        parent: "eq27304300"
    },
    {
        id: "eq27309100",
        title: "Interpreter and Translator",
        parent: "eq27300000"
    },
    {
        id: "eq27309900",
        title: "Media and Communication Worker",
        parent: "eq27300000"
    },
    {
        id: "eq27400000",
        title: "Media and Communication Equipment Workers",
        parent: "eq27000000"
    },
    {
        id: "eq27401100",
        title: "Audio and Video Equipment Technician",
        parent: "eq27400000"
    },
    {
        id: "eq27401200",
        title: "Broadcast Technician",
        parent: "eq27400000"
    },
    {
        id: "eq27401300",
        title: "Radio Operator",
        parent: "eq27400000"
    },
    {
        id: "eq27401400",
        title: "Sound Engineering Technician",
        parent: "eq27400000"
    },
    {
        id: "eq27402100",
        title: "Photographer",
        parent: "eq27400000"
    },
    {
        id: "eq27403100",
        title: "Camera Operator for Television, Video, and Motion Picture",
        parent: "eq27400000"
    },
    {
        id: "eq27403200",
        title: "Film and Video Editor",
        parent: "eq27400000"
    },
    {
        id: "eq27409900",
        title: "Media and Communication Equipment Worker",
        parent: "eq27400000"
    },
    {
        id: "eq37000000",
        title: "Building and Grounds Cleaning and Maintenance",
        parent: null
    },
    {
        id: "eq37100000",
        title:
            "Supervisors, Building and Grounds Cleaning and Maintenance Workers",
        parent: "eq37000000"
    },
    {
        id: "eq37101100",
        title: "First-Line Supervisor of Housekeeping and Janitorial Workers",
        parent: "eq37100000"
    },
    {
        id: "eq37101101",
        title: "Housekeeping Supervisors",
        parent: "eq37101100"
    },
    {
        id: "eq37101102",
        title: "Janitorial Supervisors",
        parent: "eq37101100"
    },
    {
        id: "eq37101200",
        title:
            "First-Line Supervisor of Landscaping, Lawn Service and Groundskeeping Workers",
        parent: "eq37100000"
    },
    {
        id: "eq37101202",
        title:
            "First-Line Supervisors and Manager/Supervisors - Landscaping Workers",
        parent: "eq37101200"
    },
    {
        id: "eq37200000",
        title: "Building Cleaning and Pest Control Workers",
        parent: "eq37000000"
    },
    {
        id: "eq37201100",
        title: "Janitor and Cleaner",
        parent: "eq37200000"
    },
    {
        id: "eq37201200",
        title: "Maid and Housekeeping Cleaner",
        parent: "eq37200000"
    },
    {
        id: "eq37201900",
        title: "Building Cleaning Worker",
        parent: "eq37200000"
    },
    {
        id: "eq37202100",
        title: "Pest Control Worker",
        parent: "eq37200000"
    },
    {
        id: "eq37300000",
        title: "Grounds Maintenance Workers",
        parent: "eq37000000"
    },
    {
        id: "eq37301100",
        title: "Landscaping and Groundskeeping Worker",
        parent: "eq37300000"
    },
    {
        id: "eq37301200",
        title: "Pesticide Handler, Sprayer and Applicator, Vegetation",
        parent: "eq37300000"
    },
    {
        id: "eq37301300",
        title: "Tree Trimmer and Pruner",
        parent: "eq37300000"
    },
    {
        id: "eq37301900",
        title: "Grounds Maintenance Worker",
        parent: "eq37300000"
    },
    {
        id: "eq13000000",
        title: "Business and Financial Operations",
        parent: null
    },
    {
        id: "eq13100000",
        title: "Business Operations Specialists",
        parent: "eq13000000"
    },
    {
        id: "eq13101100",
        title: "Agent/Business Manager of Artist, Performer or Athlete",
        parent: "eq13100000"
    },
    {
        id: "eq13102100",
        title: "Purchasing Agent and Buyer, Farm Products",
        parent: "eq13100000"
    },
    {
        id: "eq13102200",
        title: "Wholesale and Retail Buyer, Except Farm Products",
        parent: "eq13100000"
    },
    {
        id: "eq13102300",
        title: "Purchasing Agent, Except Wholesale, Retail and Farm Products",
        parent: "eq13100000"
    },
    {
        id: "eq13103100",
        title: "Claims Adjuster, Examiners, and Investigators",
        parent: "eq13100000"
    },
    {
        id: "eq13103101",
        title: "Claims Examiners, Property and Casualty Insurance",
        parent: "eq13103100"
    },
    {
        id: "eq13103102",
        title: "Insurance Adjusters, Examiners, and Investigators",
        parent: "eq13103100"
    },
    {
        id: "eq13103200",
        title: "Insurance Appraiser, Auto Damage",
        parent: "eq13100000"
    },
    {
        id: "eq13104100",
        title: "Compliance Officer",
        parent: "eq13100000"
    },
    {
        id: "eq13104101",
        title: "Environmental Compliance Inspectors",
        parent: "eq13104100"
    },
    {
        id: "eq13104102",
        title: "Licensing Examiners and Inspectors",
        parent: "eq13104100"
    },
    {
        id: "eq13104103",
        title: "ual Opportunity Representatives and Officers",
        parent: "eq13104100"
    },
    {
        id: "eq13104104",
        title: "Government Property Inspectors and Investigators",
        parent: "eq13104100"
    },
    {
        id: "eq13104105",
        title: "Pressure Vessel Inspectors",
        parent: "eq13104100"
    },
    {
        id: "eq13104106",
        title: "Coroners",
        parent: "eq13104100"
    },
    {
        id: "eq13105100",
        title: "Cost Estimator",
        parent: "eq13100000"
    },
    {
        id: "eq13106100",
        title: "Emergency Management Specialist",
        parent: "eq13100000"
    },
    {
        id: "eq13107100",
        title: "Employment, Recruitment and Placement Specialist",
        parent: "eq13100000"
    },
    {
        id: "eq13107101",
        title: "Employment Interviewers, Private or Public Employment Service",
        parent: "eq13107100"
    },
    {
        id: "eq13107102",
        title: "Personnel Recruiters",
        parent: "eq13107100"
    },
    {
        id: "eq13107200",
        title: "Compensation, Benefits and Job Analysis Specialist",
        parent: "eq13100000"
    },
    {
        id: "eq13107300",
        title: "Training and Development Specialist",
        parent: "eq13100000"
    },
    {
        id: "eq13107900",
        title: "Human Resources, Training and Labor Relations Specialist",
        parent: "eq13100000"
    },
    {
        id: "eq13108100",
        title: "Logistician",
        parent: "eq13100000"
    },
    {
        id: "eq13111100",
        title: "Management Analyst",
        parent: "eq13100000"
    },
    {
        id: "eq13111151",
        title: "E-Commerce Consultants",
        parent: "eq13111100"
    },
    {
        id: "eq13111152",
        title: "General Strategy Consultants",
        parent: "eq13111100"
    },
    {
        id: "eq13111153",
        title: "IT Strategy Consultants",
        parent: "eq13111100"
    },
    {
        id: "eq13111154",
        title: "IT Functional Analysis Consultants",
        parent: "eq13111100"
    },
    {
        id: "eq13112100",
        title: "Meeting and Convention Planner",
        parent: "eq13100000"
    },
    {
        id: "eq13119900",
        title: "Business Operations Specialist",
        parent: "eq13100000"
    },
    {
        id: "eq13200000",
        title: "Financial Specialists",
        parent: "eq13000000"
    },
    {
        id: "eq13201100",
        title: "Accountant and Auditor",
        parent: "eq13200000"
    },
    {
        id: "eq13201151",
        title: "Fund Managers",
        parent: "eq13201100"
    },
    {
        id: "eq13201152",
        title: "Retirement Funds Specialists",
        parent: "eq13201100"
    },
    {
        id: "eq13201153",
        title: "Treasurers",
        parent: "eq13201100"
    },
    {
        id: "eq13202100",
        title: "Appraiser and Assessor of Real Estate",
        parent: "eq13200000"
    },
    {
        id: "eq13203100",
        title: "Budget Analyst",
        parent: "eq13200000"
    },
    {
        id: "eq13204100",
        title: "Credit Analyst",
        parent: "eq13200000"
    },
    {
        id: "eq13205100",
        title: "Financial Analyst",
        parent: "eq13200000"
    },
    {
        id: "eq13205200",
        title: "Personal Financial Advisor",
        parent: "eq13200000"
    },
    {
        id: "eq13205300",
        title: "Insurance Underwriter",
        parent: "eq13200000"
    },
    {
        id: "eq13206100",
        title: "Financial Examiner",
        parent: "eq13200000"
    },
    {
        id: "eq13207200",
        title: "Loan Officer",
        parent: "eq13200000"
    },
    {
        id: "eq13208100",
        title: "Tax Examiner, Collector and Revenue Agent",
        parent: "eq13200000"
    },
    {
        id: "eq13208200",
        title: "Tax Preparer",
        parent: "eq13200000"
    },
    {
        id: "eq13209900",
        title: "Financial Specialist",
        parent: "eq13200000"
    },
    {
        id: "eq13207100",
        title: "Loan Counselors",
        parent: "eq13200000"
    },
    {
        id: "eq21000000",
        title: "Community and Social Services",
        parent: null
    },
    {
        id: "eq21100000",
        title:
            "Counselors, Social Workers, and Other Community and Social Service Specialists",
        parent: "eq21000000"
    },
    {
        id: "eq21101100",
        title: "Substance Abuse and Behavioral Disorder Counselor",
        parent: "eq21100000"
    },
    {
        id: "eq21101200",
        title: "Educational, Vocational and School Counselor",
        parent: "eq21100000"
    },
    {
        id: "eq21101300",
        title: "Marriage and Family Therapist",
        parent: "eq21100000"
    },
    {
        id: "eq21101400",
        title: "Mental Health Counselor",
        parent: "eq21100000"
    },
    {
        id: "eq21101500",
        title: "Rehabilitation Counselor",
        parent: "eq21100000"
    },
    {
        id: "eq21101900",
        title: "Counselor",
        parent: "eq21100000"
    },
    {
        id: "eq21102100",
        title: "Child, Family and School Social Worker",
        parent: "eq21100000"
    },
    {
        id: "eq21102200",
        title: "Medical and Public Health Social Worker",
        parent: "eq21100000"
    },
    {
        id: "eq21102300",
        title: "Mental Health and Substance Abuse Social Worker",
        parent: "eq21100000"
    },
    {
        id: "eq21102900",
        title: "Social Worker",
        parent: "eq21100000"
    },
    {
        id: "eq21109100",
        title: "Health Educator",
        parent: "eq21100000"
    },
    {
        id: "eq21109200",
        title: "Probation Officer and Correctional Treatment Specialist",
        parent: "eq21100000"
    },
    {
        id: "eq21109300",
        title: "Social and Human Service Assistant",
        parent: "eq21100000"
    },
    {
        id: "eq21109900",
        title: "Community and Social Service Specialist",
        parent: "eq21100000"
    },
    {
        id: "eq21200000",
        title: "Religious Workers",
        parent: "eq21000000"
    },
    { id: "eq21201100", title: "Clergy", parent: "eq21200000" },
    {
        id: "eq21202100",
        title: "Director of Religious Activities and Education",
        parent: "eq21200000"
    },
    {
        id: "eq21209900",
        title: "Religious Worker",
        parent: "eq21200000"
    },
    {
        id: "eq15000000",
        title: "Computer and Mathematics",
        parent: null
    },
    {
        id: "eq15100000",
        title: "Computer Specialists",
        parent: "eq15000000"
    },
    {
        id: "eq15101100",
        title: "Computer and Information Scientist, Research",
        parent: "eq15100000"
    },
    {
        id: "eq15102100",
        title: "Computer Programmer",
        parent: "eq15100000"
    },
    {
        id: "eq15102151",
        title: "E-Commerce Programmers",
        parent: "eq15102100"
    },
    {
        id: "eq15102152",
        title: "Quality Assurance Programmers",
        parent: "eq15102100"
    },
    {
        id: "eq15103000",
        title: "Computer Software Engineer",
        parent: "eq15100000"
    },
    {
        id: "eq15103100",
        title: "Computer Software Engineer, Applications",
        parent: "eq15100000"
    },
    {
        id: "eq15103200",
        title: "Computer Software Engineer, Systems Software",
        parent: "eq15100000"
    },
    {
        id: "eq15104100",
        title: "Computer Support Specialist",
        parent: "eq15100000"
    },
    {
        id: "eq15105100",
        title: "Computer Systems Analyst",
        parent: "eq15100000"
    },
    {
        id: "eq15105151",
        title: "IT Team Leaders",
        parent: "eq15105100"
    },
    {
        id: "eq15106100",
        title: "Database Administrator",
        parent: "eq15100000"
    },
    {
        id: "eq15107100",
        title: "Network and Computer Systems Administrator",
        parent: "eq15100000"
    },
    {
        id: "eq15107101",
        title: "Computer Security Specialists",
        parent: "eq15107100"
    },
    {
        id: "eq15107151",
        title: "Internet Network Specialists",
        parent: "eq15107100"
    },
    {
        id: "eq15108100",
        title: "Network Systems and Data Communications Analyst",
        parent: "eq15100000"
    },
    {
        id: "eq15109900",
        title: "Computer Specialist",
        parent: "eq15100000"
    },
    {
        id: "eq15109951",
        title: "IT Business Analysts",
        parent: "eq15109900"
    },
    {
        id: "eq15200000",
        title: "Mathematical Scientists",
        parent: "eq15000000"
    },
    { id: "eq15201100", title: "Actuary", parent: "eq15200000" },
    {
        id: "eq15202100",
        title: "Mathematician",
        parent: "eq15200000"
    },
    {
        id: "eq15203100",
        title: "Operations Research Analyst",
        parent: "eq15200000"
    },
    {
        id: "eq15204100",
        title: "Statistician",
        parent: "eq15200000"
    },
    {
        id: "eq15209900",
        title: "Mathematical Scientist",
        parent: "eq15200000"
    },
    {
        id: "eq15300000",
        title: "Mathematical Technician",
        parent: "eq15000000"
    },
    {
        id: "eq15301100",
        title: "Mathematical Technician",
        parent: "eq15300000"
    },
    {
        id: "eq47000000",
        title: "Construction and Extraction",
        parent: null
    },
    {
        id: "eq47100000",
        title: "Supervisors, Construction and Extraction Workers",
        parent: "eq47000000"
    },
    {
        id: "eq47101100",
        title:
            "First-Line Supervisor of Construction Trades and Extraction Workers",
        parent: "eq47100000"
    },
    {
        id: "eq47200000",
        title: "Construction Trades Workers",
        parent: "eq47000000"
    },
    {
        id: "eq47201100",
        title: "Boilermaker",
        parent: "eq47200000"
    },
    {
        id: "eq47202100",
        title: "Brickmason and Blockmason",
        parent: "eq47200000"
    },
    {
        id: "eq47202200",
        title: "Stonemason",
        parent: "eq47200000"
    },
    {
        id: "eq47203100",
        title: "Carpenter",
        parent: "eq47200000"
    },
    {
        id: "eq47203101",
        title: "Construction Carpenters",
        parent: "eq47203100"
    },
    {
        id: "eq47203102",
        title: "Rough Carpenters",
        parent: "eq47203100"
    },
    {
        id: "eq47203103",
        title: "Carpenter Assemblers and Repairers",
        parent: "eq47203100"
    },
    {
        id: "eq47203104",
        title: "Ship Carpenters and Joiners",
        parent: "eq47203100"
    },
    {
        id: "eq47203105",
        title: "Boat Builders and Shipwrights",
        parent: "eq47203100"
    },
    {
        id: "eq47203106",
        title: "Brattice Builders",
        parent: "eq47203100"
    },
    {
        id: "eq47204100",
        title: "Carpet Installer",
        parent: "eq47200000"
    },
    {
        id: "eq47204200",
        title: "Floor Layer, Except Carpet, Wood, and Hard Tiles",
        parent: "eq47200000"
    },
    {
        id: "eq47204300",
        title: "Floor Sander and Finisher",
        parent: "eq47200000"
    },
    {
        id: "eq47204400",
        title: "Tile and Marble Setter",
        parent: "eq47200000"
    },
    {
        id: "eq47205100",
        title: "Cement Mason and Concrete Finisher",
        parent: "eq47200000"
    },
    {
        id: "eq47205300",
        title: "Terrazzo Worker and Finisher",
        parent: "eq47200000"
    },
    {
        id: "eq47206100",
        title: "Construction Laborer",
        parent: "eq47200000"
    },
    {
        id: "eq47207100",
        title: "Paving, Surfacing and Tamping Equipment Operator",
        parent: "eq47200000"
    },
    {
        id: "eq47207200",
        title: "Pile-Driver Operator",
        parent: "eq47200000"
    },
    {
        id: "eq47207300",
        title: "Operating Engineer and Other Construction Equipment Operator",
        parent: "eq47200000"
    },
    {
        id: "eq47207301",
        title: "Grader, Bulldozer, and Scraper Operators",
        parent: "eq47207300"
    },
    {
        id: "eq47208100",
        title: "Drywall and Ceiling Tile Installer",
        parent: "eq47200000"
    },
    { id: "eq47208200", title: "Taper", parent: "eq47200000" },
    {
        id: "eq47211100",
        title: "Electrician",
        parent: "eq47200000"
    },
    { id: "eq47212100", title: "Glazier", parent: "eq47200000" },
    {
        id: "eq47213100",
        title: "Insulation Worker, Floor, Ceiling and Wall",
        parent: "eq47200000"
    },
    {
        id: "eq47213200",
        title: "Insulation Worker, Mechanical",
        parent: "eq47200000"
    },
    {
        id: "eq47214100",
        title: "Painter, Construction and Maintenance",
        parent: "eq47200000"
    },
    {
        id: "eq47214200",
        title: "Paperhanger",
        parent: "eq47200000"
    },
    {
        id: "eq47215100",
        title: "Pipelayer",
        parent: "eq47200000"
    },
    {
        id: "eq47215200",
        title: "Plumber, Pipefitter and Steamfitter",
        parent: "eq47200000"
    },
    {
        id: "eq47216100",
        title: "Plasterer and Stucco Mason",
        parent: "eq47200000"
    },
    {
        id: "eq47217100",
        title: "Reinforcing Iron and Rebar Worker",
        parent: "eq47200000"
    },
    { id: "eq47218100", title: "Roofer", parent: "eq47200000" },
    {
        id: "eq47221100",
        title: "Sheet Metal Worker",
        parent: "eq47200000"
    },
    {
        id: "eq47222100",
        title: "Structural Iron and Steel Worker",
        parent: "eq47200000"
    },
    {
        id: "eq47300000",
        title: "Helpers, Construction Trades",
        parent: "eq47000000"
    },
    {
        id: "eq47301100",
        title:
            "Helper-Brickmason, Blockmason, Stonemason and Tile and Marble Setter",
        parent: "eq47300000"
    },
    {
        id: "eq47301200",
        title: "Helper-Carpenter",
        parent: "eq47300000"
    },
    {
        id: "eq47301300",
        title: "Helper-Electrician",
        parent: "eq47300000"
    },
    {
        id: "eq47301400",
        title: "Helper-Painter, Paperhanger, Plasterer and Stucco Mason",
        parent: "eq47300000"
    },
    {
        id: "eq47301500",
        title: "Helper-Pipelayer, Plumber, Pipefitter and Steamfitter",
        parent: "eq47300000"
    },
    {
        id: "eq47301600",
        title: "Helper-Roofer",
        parent: "eq47300000"
    },
    {
        id: "eq47301900",
        title: "Helper, Construction Trades",
        parent: "eq47300000"
    },
    {
        id: "eq47400000",
        title: "Other Construction and Related Workers",
        parent: "eq47000000"
    },
    {
        id: "eq47401100",
        title: "Construction and Building Inspector",
        parent: "eq47400000"
    },
    {
        id: "eq47402100",
        title: "Elevator Installer and Repairer",
        parent: "eq47400000"
    },
    {
        id: "eq47403100",
        title: "Fence Erector",
        parent: "eq47400000"
    },
    {
        id: "eq47404100",
        title: "Hazardous Materials Removal Worker",
        parent: "eq47400000"
    },
    {
        id: "eq47404101",
        title: "Irradiated-Fuel Handlers",
        parent: "eq47404100"
    },
    {
        id: "eq47405100",
        title: "Highway Maintenance Worker",
        parent: "eq47400000"
    },
    {
        id: "eq47406100",
        title: "Rail-Track Laying and Maintenance Equipment Operator",
        parent: "eq47400000"
    },
    {
        id: "eq47407100",
        title: "Septic Tank Servicer and Sewer Pipe Cleaner",
        parent: "eq47400000"
    },
    {
        id: "eq47409100",
        title: "Segmental Paver",
        parent: "eq47400000"
    },
    {
        id: "eq47409900",
        title: "Construction and Related Worker",
        parent: "eq47400000"
    },
    {
        id: "eq47500000",
        title: "Extraction Workers",
        parent: "eq47000000"
    },
    {
        id: "eq47501100",
        title: "Derrick Operator, Oil and Gas",
        parent: "eq47500000"
    },
    {
        id: "eq47501200",
        title: "Rotary Drill Operator, Oil and Gas",
        parent: "eq47500000"
    },
    {
        id: "eq47501300",
        title: "Service Unit Operator, Oil, Gas and Mining",
        parent: "eq47500000"
    },
    {
        id: "eq47502100",
        title: "Earth Driller, Except Oil and Gas",
        parent: "eq47500000"
    },
    {
        id: "eq47502101",
        title: "Construction Drillers",
        parent: "eq47502100"
    },
    {
        id: "eq47502102",
        title: "Well and Core Drill Operators",
        parent: "eq47502100"
    },
    {
        id: "eq47503100",
        title: "Explosives Worker, Ordnance Handling Expert and Blaster",
        parent: "eq47500000"
    },
    {
        id: "eq47504100",
        title: "Continuous Mining Machine Operator",
        parent: "eq47500000"
    },
    {
        id: "eq47504200",
        title: "Mine Cutting and Channeling Machine Operator",
        parent: "eq47500000"
    },
    {
        id: "eq47504900",
        title: "Mining Machine Operator",
        parent: "eq47500000"
    },
    {
        id: "eq47505100",
        title: "Rock Splitter, Quarry",
        parent: "eq47500000"
    },
    {
        id: "eq47506100",
        title: "Roof Bolter, Mining",
        parent: "eq47500000"
    },
    {
        id: "eq47507100",
        title: "Roustabout, Oil and Gas",
        parent: "eq47500000"
    },
    {
        id: "eq47508100",
        title: "Helper-Extraction Worker",
        parent: "eq47500000"
    },
    {
        id: "eq47509900",
        title: "Extraction Worker",
        parent: "eq47500000"
    },
    {
        id: "eq47501051",
        title: "Oil, Gas, Drill Supervisors ",
        parent: "eq47500000"
    },
    {
        id: "eq25000000",
        title: "Education, Training, and Library Occupations",
        parent: null
    },
    {
        id: "eq25100000",
        title: "Postsecondary Teachers",
        parent: "eq25000000"
    },
    {
        id: "eq25101100",
        title: "Business Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25102100",
        title: "Computer Science Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25102200",
        title: "Mathematical Science Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25103100",
        title: "Architecture Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25103200",
        title: "Engineering Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25104100",
        title: "Agricultural Sciences Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25104200",
        title: "Biological Science Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25104300",
        title: "Forestry and Conservation Science Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25105100",
        title:
            "Atmospheric, Earth, Marine and Space Sciences Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25105200",
        title: "Chemistry Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25105300",
        title: "Environmental Science Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25105400",
        title: "Physics Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25106100",
        title: "Anthropology and Archeology Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25106200",
        title: "Area, Ethnic, and Cultural Studies Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25106300",
        title: "Economics Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25106400",
        title: "Geography Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25106500",
        title: "Political Science Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25106600",
        title: "Psychology Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25106700",
        title: "Sociology Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25106900",
        title: "Social Sciences Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25107100",
        title: "Health Specialties Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25107200",
        title: "Nursing Instructor and Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25108100",
        title: "Education Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25108200",
        title: "Library Science Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25111100",
        title: "Criminal Justice and Law Enforcement Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25111200",
        title: "Law Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25111300",
        title: "Social Work Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25112100",
        title: "Art, Drama, and Music Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25112200",
        title: "Communications Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25112300",
        title: "English Language and Literature Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25112400",
        title: "Foreign Language and Literature Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25112500",
        title: "History Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25112600",
        title: "Philosophy and Religion Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25119100",
        title: "Graduate Teaching Assistant",
        parent: "eq25100000"
    },
    {
        id: "eq25119200",
        title: "Home Economics Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25119300",
        title: "Recreation and Fitness Studies Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25119400",
        title: "Vocational Education Teacher, Postsecondary",
        parent: "eq25100000"
    },
    {
        id: "eq25119900",
        title: "Postsecondary Teacher",
        parent: "eq25100000"
    },
    {
        id: "eq25200000",
        title: "Primary, Secondary and Special Education School Teachers",
        parent: "eq25000000"
    },
    {
        id: "eq25201100",
        title: "Preschool Teacher",
        parent: "eq25200000"
    },
    {
        id: "eq25201200",
        title: "Kindergarten Teacher",
        parent: "eq25200000"
    },
    {
        id: "eq25202100",
        title: "Elementary School Teacher",
        parent: "eq25200000"
    },
    {
        id: "eq25202200",
        title: "Middle School Teacher",
        parent: "eq25200000"
    },
    {
        id: "eq25202300",
        title: "Vocational Education Teacher, Middle School",
        parent: "eq25200000"
    },
    {
        id: "eq25203100",
        title: "Secondary School Teacher",
        parent: "eq25200000"
    },
    {
        id: "eq25203200",
        title: "Vocational Education Teacher, Secondary School",
        parent: "eq25200000"
    },
    {
        id: "eq25204100",
        title:
            "Special Education Teacher, Preschool, Kindergarten, and Elementary School",
        parent: "eq25200000"
    },
    {
        id: "eq25204200",
        title: "Special Education Teacher, Middle School",
        parent: "eq25200000"
    },
    {
        id: "eq25204300",
        title: "Special Education Teacher, Secondary School",
        parent: "eq25200000"
    },
    {
        id: "eq25300000",
        title: "Other Teachers and Instructors",
        parent: "eq25000000"
    },
    {
        id: "eq25301100",
        title: "Adult Literacy, Remedial Education and GED Teacher",
        parent: "eq25300000"
    },
    {
        id: "eq25302100",
        title: "Self-Enrichment Education Teacher",
        parent: "eq25300000"
    },
    {
        id: "eq25302151",
        title: "IT Teachers and Trainers",
        parent: "eq25302100"
    },
    {
        id: "eq25302152",
        title: "Researchers",
        parent: "eq25302100"
    },
    {
        id: "eq25302153",
        title: "Researcher Support Administrators",
        parent: "eq25302100"
    },
    {
        id: "eq25302154",
        title: "Senior Academic Teachers",
        parent: "eq25302100"
    },
    {
        id: "eq25302155",
        title: "Student Services Directors",
        parent: "eq25302100"
    },
    {
        id: "eq25302156",
        title: "Academic Directors",
        parent: "eq25302100"
    },
    {
        id: "eq25309900",
        title: "Teacher or Instructor",
        parent: "eq25300000"
    },
    {
        id: "eq25400000",
        title: "Librarians, Curators, and Archivists",
        parent: "eq25000000"
    },
    {
        id: "eq25401100",
        title: "Archivist",
        parent: "eq25400000"
    },
    { id: "eq25401200", title: "Curator", parent: "eq25400000" },
    {
        id: "eq25401300",
        title: "Museum Technician and Conservator",
        parent: "eq25400000"
    },
    {
        id: "eq25402100",
        title: "Librarian",
        parent: "eq25400000"
    },
    {
        id: "eq25403100",
        title: "Library Technician",
        parent: "eq25400000"
    },
    {
        id: "eq25900000",
        title: "Other Education, Training and Library",
        parent: "eq25000000"
    },
    {
        id: "eq25901100",
        title: "Audio-Visual Collections Specialist",
        parent: "eq25900000"
    },
    {
        id: "eq25902100",
        title: "Farm and Home Management Advisor",
        parent: "eq25900000"
    },
    {
        id: "eq25903100",
        title: "Instructional Coordinator",
        parent: "eq25900000"
    },
    {
        id: "eq25904100",
        title: "Teacher Assistant",
        parent: "eq25900000"
    },
    {
        id: "eq25909900",
        title: "Education, Training and Library Worker",
        parent: "eq25900000"
    },
    {
        id: "eq45000000",
        title: "Farming, Fishing, and Forestry",
        parent: null
    },
    {
        id: "eq45100000",
        title: "Supervisors, Farming, Fishing, and Forestry Workers",
        parent: "eq45000000"
    },
    {
        id: "eq45101100",
        title:
            "First-Line Supervisor of Farming, Fishing, and Forestry Workers",
        parent: "eq45100000"
    },
    {
        id: "eq45101101",
        title:
            "First-Line Supervisors and Manager/Supervisors - Agricultural Crop Workers",
        parent: "eq45101100"
    },
    {
        id: "eq45101102",
        title:
            "First-Line Supervisors and Manager/Supervisors - Animal Husbandry Workers",
        parent: "eq45101100"
    },
    {
        id: "eq45101103",
        title:
            "First-Line Supervisors and Manager/Supervisors - Animal Care Workers, Except Livestock",
        parent: "eq45101100"
    },
    {
        id: "eq45101104",
        title:
            "First-Line Supervisors and Manager/Supervisors - Horticultural Workers",
        parent: "eq45101100"
    },
    {
        id: "eq45101105",
        title:
            "First-Line Supervisors and Manager/Supervisors - Logging Workers",
        parent: "eq45101100"
    },
    {
        id: "eq45101106",
        title:
            "First-Line Supervisors and Manager/Supervisors - Fishery Workers",
        parent: "eq45101100"
    },
    {
        id: "eq45200000",
        title: "Agricultural Workers",
        parent: "eq45000000"
    },
    {
        id: "eq45201100",
        title: "Agricultural Inspector",
        parent: "eq45200000"
    },
    {
        id: "eq45202100",
        title: "Animal Breeder",
        parent: "eq45200000"
    },
    {
        id: "eq45203100",
        title: "Farm Labor Contractor",
        parent: "eq45200000"
    },
    {
        id: "eq45204100",
        title: "Grader and Sorter, Agricultural Products",
        parent: "eq45200000"
    },
    {
        id: "eq45209100",
        title: "Agricultural Equipment Operator",
        parent: "eq45200000"
    },
    {
        id: "eq45209200",
        title: "Farmworker and Laborer, Crop, Nursery, and Greenhouse",
        parent: "eq45200000"
    },
    {
        id: "eq45209201",
        title: "Nursery Workers",
        parent: "eq45209200"
    },
    {
        id: "eq45209202",
        title: "General Farmworkers",
        parent: "eq45209200"
    },
    {
        id: "eq45209300",
        title: "Farmworker, Farm and Ranch Animals",
        parent: "eq45200000"
    },
    {
        id: "eq45209900",
        title: "Agricultural Worker",
        parent: "eq45200000"
    },
    {
        id: "eq45300000",
        title: "Fishing and Hunting Workers",
        parent: "eq45000000"
    },
    {
        id: "eq45301100",
        title: "Fisher and Related Fishing Worker",
        parent: "eq45300000"
    },
    {
        id: "eq45302100",
        title: "Hunter and Trapper",
        parent: "eq45300000"
    },
    {
        id: "eq45400000",
        title: "Forest, Conservation, and Logging Workers",
        parent: "eq45000000"
    },
    {
        id: "eq45401100",
        title: "Forest and Conservation Worker",
        parent: "eq45400000"
    },
    { id: "eq45402100", title: "Faller", parent: "eq45400000" },
    {
        id: "eq45402200",
        title: "Logging Equipment Operator",
        parent: "eq45400000"
    },
    {
        id: "eq45402201",
        title: "Logging Tractor Operators",
        parent: "eq45402200"
    },
    {
        id: "eq45402300",
        title: "Log Grader and Scaler",
        parent: "eq45400000"
    },
    {
        id: "eq45402900",
        title: "Logging Worker",
        parent: "eq45400000"
    },
    {
        id: "eq45900000",
        title: "Other Farming, Fishing, and Forestry Workers",
        parent: "eq45000000"
    },
    {
        id: "eq45909900",
        title: "Farming, Fishing, and Forestry Worker",
        parent: "eq45900000"
    },
    {
        id: "eq35000000",
        title: "Food Preparation and Serving",
        parent: null
    },
    {
        id: "eq35100000",
        title: "Supervisors, Food Preparation and Serving Workers",
        parent: "eq35000000"
    },
    {
        id: "eq35101100",
        title: "Chef and Head Cook",
        parent: "eq35100000"
    },
    {
        id: "eq35101200",
        title: "First-Line Supervisor of Food Preparation and Serving Workers",
        parent: "eq35100000"
    },
    {
        id: "eq35200000",
        title: "Cook and Food Preparation Worker",
        parent: "eq35000000"
    },
    {
        id: "eq35201100",
        title: "Cook, Fast Food",
        parent: "eq35200000"
    },
    {
        id: "eq35201200",
        title: "Cook, Institution and Cafeteria",
        parent: "eq35200000"
    },
    {
        id: "eq35201300",
        title: "Cook, Private Household",
        parent: "eq35200000"
    },
    {
        id: "eq35201400",
        title: "Cook, Restaurant",
        parent: "eq35200000"
    },
    {
        id: "eq35201500",
        title: "Cook, Short Order",
        parent: "eq35200000"
    },
    { id: "eq35201900", title: "Cook", parent: "eq35200000" },
    {
        id: "eq35202100",
        title: "Food Preparation Worker",
        parent: "eq35200000"
    },
    {
        id: "eq35300000",
        title: "Food and Beverage Serving Workers",
        parent: "eq35000000"
    },
    {
        id: "eq35301100",
        title: "Bartender",
        parent: "eq35300000"
    },
    {
        id: "eq35302100",
        title: "Combined Food Preparation and Serving Worker",
        parent: "eq35300000"
    },
    {
        id: "eq35302200",
        title: "Counter Attendant, Cafeteria, Food Concession and Coffee Shop",
        parent: "eq35300000"
    },
    {
        id: "eq35303100",
        title: "Waiter or Waitress",
        parent: "eq35300000"
    },
    {
        id: "eq35304100",
        title: "Food Server, Nonrestaurant",
        parent: "eq35300000"
    },
    {
        id: "eq35900000",
        title: "Other Food Preparation and Serving Related Workers",
        parent: "eq35000000"
    },
    {
        id: "eq35901100",
        title: "Dining Room and Cafeteria Attendant and Bartender Helper",
        parent: "eq35900000"
    },
    {
        id: "eq35902100",
        title: "Dishwasher",
        parent: "eq35900000"
    },
    {
        id: "eq35903100",
        title: "Host or Hostess, Restaurant, Lounge and Coffee Shop",
        parent: "eq35900000"
    },
    {
        id: "eq35909900",
        title: "Food Preparation and Serving Related Worker",
        parent: "eq35900000"
    },
    {
        id: "eq29000000",
        title: "Healthcare Practitioners and Technicians",
        parent: null
    },
    {
        id: "eq29100000",
        title: "Health Diagnosing and Treating Practitioners",
        parent: "eq29000000"
    },
    {
        id: "eq29101100",
        title: "Chiropractor",
        parent: "eq29100000"
    },
    {
        id: "eq29102100",
        title: "Dentist, General",
        parent: "eq29100000"
    },
    {
        id: "eq29102200",
        title: "Oral and Maxillofacial Surgeon",
        parent: "eq29100000"
    },
    {
        id: "eq29102300",
        title: "Orthodontist",
        parent: "eq29100000"
    },
    {
        id: "eq29102400",
        title: "Prosthodontist",
        parent: "eq29100000"
    },
    { id: "eq29102900", title: "Dentist", parent: "eq29100000" },
    {
        id: "eq29103100",
        title: "Dietitian and Nutritionist",
        parent: "eq29100000"
    },
    {
        id: "eq29104100",
        title: "Optometrist",
        parent: "eq29100000"
    },
    {
        id: "eq29105100",
        title: "Pharmacist",
        parent: "eq29100000"
    },
    {
        id: "eq29106100",
        title: "Anesthesiologist",
        parent: "eq29100000"
    },
    {
        id: "eq29106200",
        title: "Family and General Practitioner",
        parent: "eq29100000"
    },
    {
        id: "eq29106300",
        title: "Internist, General",
        parent: "eq29100000"
    },
    {
        id: "eq29106400",
        title: "Obstetrician and Gynecologist",
        parent: "eq29100000"
    },
    {
        id: "eq29106500",
        title: "Pediatrician, General",
        parent: "eq29100000"
    },
    {
        id: "eq29106600",
        title: "Psychiatrist",
        parent: "eq29100000"
    },
    { id: "eq29106700", title: "Surgeon", parent: "eq29100000" },
    {
        id: "eq29106900",
        title: "Physician and Surgeon",
        parent: "eq29100000"
    },
    {
        id: "eq29107100",
        title: "Physician Assistant",
        parent: "eq29100000"
    },
    {
        id: "eq29108100",
        title: "Podiatrist",
        parent: "eq29100000"
    },
    {
        id: "eq29111100",
        title: "Registered Nurse",
        parent: "eq29100000"
    },
    {
        id: "eq29112100",
        title: "Audiologist",
        parent: "eq29100000"
    },
    {
        id: "eq29112200",
        title: "Occupational Therapist",
        parent: "eq29100000"
    },
    {
        id: "eq29112300",
        title: "Physical Therapist",
        parent: "eq29100000"
    },
    {
        id: "eq29112400",
        title: "Radiation Therapist",
        parent: "eq29100000"
    },
    {
        id: "eq29112500",
        title: "Recreational Therapist",
        parent: "eq29100000"
    },
    {
        id: "eq29112600",
        title: "Respiratory Therapist",
        parent: "eq29100000"
    },
    {
        id: "eq29112700",
        title: "Speech-Language Pathologist",
        parent: "eq29100000"
    },
    {
        id: "eq29112900",
        title: "Therapist",
        parent: "eq29100000"
    },
    {
        id: "eq29113100",
        title: "Veterinarian",
        parent: "eq29100000"
    },
    {
        id: "eq29119900",
        title: "Health Diagnosing and Treating Practitioner",
        parent: "eq29100000"
    },
    {
        id: "eq29200000",
        title: "Health Technologists and Technicians",
        parent: "eq29000000"
    },
    {
        id: "eq29201100",
        title: "Medical and Clinical Laboratory Technologist",
        parent: "eq29200000"
    },
    {
        id: "eq29201200",
        title: "Medical and Clinical Laboratory Technician",
        parent: "eq29200000"
    },
    {
        id: "eq29202100",
        title: "Dental Hygienist",
        parent: "eq29200000"
    },
    {
        id: "eq29203100",
        title: "Cardiovascular Technologist or Technician",
        parent: "eq29200000"
    },
    {
        id: "eq29203200",
        title: "Diagnostic Medical Sonographer",
        parent: "eq29200000"
    },
    {
        id: "eq29203300",
        title: "Nuclear Medicine Technologist",
        parent: "eq29200000"
    },
    {
        id: "eq29203400",
        title: "Radiologic Technologist or Technician",
        parent: "eq29200000"
    },
    {
        id: "eq29204100",
        title: "Emergency Medical Technician and Paramedic",
        parent: "eq29200000"
    },
    {
        id: "eq29205100",
        title: "Dietetic Technician",
        parent: "eq29200000"
    },
    {
        id: "eq29205200",
        title: "Pharmacy Technician",
        parent: "eq29200000"
    },
    {
        id: "eq29205300",
        title: "Psychiatric Technician",
        parent: "eq29200000"
    },
    {
        id: "eq29205400",
        title: "Respiratory Therapy Technician",
        parent: "eq29200000"
    },
    {
        id: "eq29205500",
        title: "Surgical Technologist",
        parent: "eq29200000"
    },
    {
        id: "eq29205600",
        title: "Veterinary Technologist or Technicians",
        parent: "eq29200000"
    },
    {
        id: "eq29206100",
        title: "Licensed Practical or Licensed Vocational Nurse",
        parent: "eq29200000"
    },
    {
        id: "eq29207100",
        title: "Medical Records and Health Information Technician",
        parent: "eq29200000"
    },
    {
        id: "eq29208100",
        title: "Optician, Dispensing",
        parent: "eq29200000"
    },
    {
        id: "eq29209100",
        title: "Orthotist and Prosthetist",
        parent: "eq29200000"
    },
    {
        id: "eq29209900",
        title: "Health Technologist or Technician",
        parent: "eq29200000"
    },
    {
        id: "eq29900000",
        title: "Other Healthcare Practitioners and Technicians",
        parent: "eq29000000"
    },
    {
        id: "eq29901100",
        title: "Occupational Health and Safety Specialist",
        parent: "eq29900000"
    },
    {
        id: "eq29901200",
        title: "Occupational Health and Safety Technician",
        parent: "eq29900000"
    },
    {
        id: "eq29909100",
        title: "Athletic Trainer",
        parent: "eq29900000"
    },
    {
        id: "eq29909900",
        title: "Healthcare Practitioner or Technical Worker",
        parent: "eq29900000"
    },
    {
        id: "eq31000000",
        title: "Healthcare Support",
        parent: null
    },
    {
        id: "eq31100000",
        title: "Nursing, Psychiatric, and Home Health Aides",
        parent: "eq31000000"
    },
    {
        id: "eq31101100",
        title: "Home Health Aide",
        parent: "eq31100000"
    },
    {
        id: "eq31101200",
        title: "Nursing Aide, Orderlie and Attendant",
        parent: "eq31100000"
    },
    {
        id: "eq31101300",
        title: "Psychiatric Aide",
        parent: "eq31100000"
    },
    {
        id: "eq31200000",
        title: "Occupational and Physical Therapist Assistant or Aide",
        parent: "eq31000000"
    },
    {
        id: "eq31201100",
        title: "Occupational Therapist Assistant",
        parent: "eq31200000"
    },
    {
        id: "eq31201200",
        title: "Occupational Therapist Aide",
        parent: "eq31200000"
    },
    {
        id: "eq31202100",
        title: "Physical Therapist Assistant",
        parent: "eq31200000"
    },
    {
        id: "eq31202200",
        title: "Physical Therapist Aide",
        parent: "eq31200000"
    },
    {
        id: "eq31900000",
        title: "Other Healthcare Support",
        parent: "eq31000000"
    },
    {
        id: "eq31901100",
        title: "Massage Therapist",
        parent: "eq31900000"
    },
    {
        id: "eq31909100",
        title: "Dental Assistant",
        parent: "eq31900000"
    },
    {
        id: "eq31909200",
        title: "Medical Assistant",
        parent: "eq31900000"
    },
    {
        id: "eq31909300",
        title: "Medical Equipment Preparer",
        parent: "eq31900000"
    },
    {
        id: "eq31909400",
        title: "Medical Transcriptionist",
        parent: "eq31900000"
    },
    {
        id: "eq31909500",
        title: "Pharmacy Aide",
        parent: "eq31900000"
    },
    {
        id: "eq31909600",
        title: "Veterinary Assistant and Laboratory Animal Caretaker",
        parent: "eq31900000"
    },
    {
        id: "eq31909900",
        title: "Healthcare Support Worker",
        parent: "eq31900000"
    },
    {
        id: "eq49000000",
        title: "Installation, Maintenance, and Repair",
        parent: null
    },
    {
        id: "eq49100000",
        title: "Supervisors of Installation, Maintenance, and Repair Workers",
        parent: "eq49000000"
    },
    {
        id: "eq49101100",
        title: "First-Line Supervisor of Mechanics, Installers and Repairers",
        parent: "eq49100000"
    },
    {
        id: "eq49200000",
        title:
            "Electrical and Electronic Equipment Mechanics, Installers, and Repairers",
        parent: "eq49000000"
    },
    {
        id: "eq49201100",
        title: "Computer, Automated Teller and Office Machine Repairer",
        parent: "eq49200000"
    },
    {
        id: "eq49202100",
        title: "Radio Mechanic",
        parent: "eq49200000"
    },
    {
        id: "eq49202200",
        title: "Telecommunications Equipment Installer and Repairer",
        parent: "eq49200000"
    },
    {
        id: "eq49202201",
        title: "Central Office and PBX Installers and Repairers",
        parent: "eq49202200"
    },
    {
        id: "eq49202202",
        title: "Frame Wirers, Central Office",
        parent: "eq49202200"
    },
    {
        id: "eq49202203",
        title: "Communication Equipment Mechanics, Installers, and Repairers",
        parent: "eq49202200"
    },
    {
        id: "eq49202204",
        title: "Telecommunications Facility Examiners",
        parent: "eq49202200"
    },
    {
        id: "eq49202205",
        title: "Station Installers and Repairers, Telephone",
        parent: "eq49202200"
    },
    {
        id: "eq49209100",
        title: "Avionics Technician",
        parent: "eq49200000"
    },
    {
        id: "eq49209200",
        title: "Electric Motor, Power Tool, and Related Repairer",
        parent: "eq49200000"
    },
    {
        id: "eq49209201",
        title: "Electric Home Appliance and Power Tool Repairers",
        parent: "eq49209200"
    },
    {
        id: "eq49209202",
        title: "Electric Motor and Switch Assemblers and Repairers",
        parent: "eq49209200"
    },
    {
        id: "eq49209203",
        title: "Battery Repairers",
        parent: "eq49209200"
    },
    {
        id: "eq49209204",
        title: "Transformer Repairers",
        parent: "eq49209200"
    },
    {
        id: "eq49209205",
        title: "Electrical Parts Reconditioners",
        parent: "eq49209200"
    },
    {
        id: "eq49209206",
        title: "Hand and Portable Power Tool Repairers",
        parent: "eq49209200"
    },
    {
        id: "eq49209300",
        title:
            "Electrical and Electronics Installer and Repairer, Transportation Equipment",
        parent: "eq49200000"
    },
    {
        id: "eq49209400",
        title:
            "Electrical and Electronics Repairer, Commercial and Industrial Equipment",
        parent: "eq49200000"
    },
    {
        id: "eq49209500",
        title:
            "Electrical and Electronics Repairer, Powerhouse, Substation, and Relay",
        parent: "eq49200000"
    },
    {
        id: "eq49209600",
        title: "Electronic Equipment Installer and Repairer, Motor Vehicles",
        parent: "eq49200000"
    },
    {
        id: "eq49209700",
        title: "Electronic Home Entertainment Equipment Installer and Repairer",
        parent: "eq49200000"
    },
    {
        id: "eq49209800",
        title: "Security and Fire Alarm Systems Installer",
        parent: "eq49200000"
    },
    {
        id: "eq49300000",
        title:
            "Vehicle and Mobile Equipment Mechanics, Installers, and Repairers",
        parent: "eq49000000"
    },
    {
        id: "eq49301100",
        title: "Aircraft Mechanic and Service Technician",
        parent: "eq49300000"
    },
    {
        id: "eq49301101",
        title: "Airframe-and-Power-Plant Mechanics",
        parent: "eq49301100"
    },
    {
        id: "eq49301102",
        title: "Aircraft Engine Specialists",
        parent: "eq49301100"
    },
    {
        id: "eq49301103",
        title: "Aircraft Body and Bonded Structure Repairers",
        parent: "eq49301100"
    },
    {
        id: "eq49302100",
        title: "Automotive Body and Related Repairer",
        parent: "eq49300000"
    },
    {
        id: "eq49302200",
        title: "Automotive Glass Installer and Repairer",
        parent: "eq49300000"
    },
    {
        id: "eq49302300",
        title: "Automotive Service Technician and Mechanic",
        parent: "eq49300000"
    },
    {
        id: "eq49302301",
        title: "Automotive Master Mechanics",
        parent: "eq49302300"
    },
    {
        id: "eq49302302",
        title: "Automotive Specialty Technicians",
        parent: "eq49302300"
    },
    {
        id: "eq49303100",
        title: "Bus and Truck Mechanic and Diesel Engine Specialist",
        parent: "eq49300000"
    },
    {
        id: "eq49304000",
        title:
            "Heavy Vehicle and Mobile Equipment Service Technicians and Mechanics",
        parent: "eq49300000"
    },
    {
        id: "eq49304100",
        title: "Farm Equipment Mechanic",
        parent: "eq49300000"
    },
    {
        id: "eq49304200",
        title: "Mobile Heavy Equipment Mechanic, Except Engines",
        parent: "eq49300000"
    },
    {
        id: "eq49304300",
        title: "Rail Car Repairer",
        parent: "eq49300000"
    },
    {
        id: "eq49305100",
        title: "Motorboat Mechanic",
        parent: "eq49300000"
    },
    {
        id: "eq49305200",
        title: "Motorcycle Mechanic",
        parent: "eq49300000"
    },
    {
        id: "eq49305300",
        title: "Outdoor Power Equipment and Other Small Engine Mechanic",
        parent: "eq49300000"
    },
    {
        id: "eq49309100",
        title: "Bicycle Repairer",
        parent: "eq49300000"
    },
    {
        id: "eq49309200",
        title: "Recreational Vehicle Service Technician",
        parent: "eq49300000"
    },
    {
        id: "eq49309300",
        title: "Tire Repairer and Changer",
        parent: "eq49300000"
    },
    {
        id: "eq49900000",
        title: "Other Installation, Maintenance, and Repair",
        parent: "eq49000000"
    },
    {
        id: "eq49901100",
        title: "Mechanical Door Repairer",
        parent: "eq49900000"
    },
    {
        id: "eq49901200",
        title: "Control and Valve Installer and Repairer",
        parent: "eq49900000"
    },
    {
        id: "eq49901201",
        title: "Electric Meter Installers and Repairers",
        parent: "eq49901200"
    },
    {
        id: "eq49901202",
        title: "Valve and Regulator Repairers",
        parent: "eq49901200"
    },
    {
        id: "eq49901203",
        title: "Meter Mechanics",
        parent: "eq49901200"
    },
    {
        id: "eq49902100",
        title:
            "Heating, Air Conditioning, and Refrigeration Mechanic and Installer",
        parent: "eq49900000"
    },
    {
        id: "eq49903100",
        title: "Home Appliance Repairer",
        parent: "eq49900000"
    },
    {
        id: "eq49903101",
        title: "Home Appliance Installers",
        parent: "eq49903100"
    },
    {
        id: "eq49903102",
        title: "Gas Appliance Repairers",
        parent: "eq49903100"
    },
    {
        id: "eq49904100",
        title: "Industrial Machinery Mechanic",
        parent: "eq49900000"
    },
    {
        id: "eq49904200",
        title: "Maintenance and Repair Worker, General",
        parent: "eq49900000"
    },
    {
        id: "eq49904300",
        title: "Maintenance Worker, Machinery",
        parent: "eq49900000"
    },
    {
        id: "eq49904400",
        title: "Millwright",
        parent: "eq49900000"
    },
    {
        id: "eq49904500",
        title: "Refractory Materials Repairer",
        parent: "eq49900000"
    },
    {
        id: "eq49905100",
        title: "Electrical Power-Line Installer and Repairer",
        parent: "eq49900000"
    },
    {
        id: "eq49905200",
        title: "Telecommunications Line Installer and Repairer",
        parent: "eq49900000"
    },
    {
        id: "eq49906100",
        title: "Camera and Photographic Equipment Repairer",
        parent: "eq49900000"
    },
    {
        id: "eq49906200",
        title: "Medical Equipment Repairer",
        parent: "eq49900000"
    },
    {
        id: "eq49906300",
        title: "Musical Instrument Repairer and Tuner",
        parent: "eq49900000"
    },
    {
        id: "eq49906301",
        title: "Keyboard Instrument Repairers and Tuners",
        parent: "eq49906300"
    },
    {
        id: "eq49906302",
        title: "Stringed Instrument Repairers and Tuners",
        parent: "eq49906300"
    },
    {
        id: "eq49906303",
        title: "Reed or Wind Instrument Repairers and Tuners",
        parent: "eq49906300"
    },
    {
        id: "eq49906304",
        title: "Percussion Instrument Repairers and Tuners",
        parent: "eq49906300"
    },
    {
        id: "eq49906400",
        title: "Watch Repairer",
        parent: "eq49900000"
    },
    {
        id: "eq49906900",
        title: "Precision Instrument and Equipment Repairer",
        parent: "eq49900000"
    },
    {
        id: "eq49909100",
        title: "Coin, Vending, and Amusement Machine Servicer and Repairer",
        parent: "eq49900000"
    },
    {
        id: "eq49909200",
        title: "Commercial Diver",
        parent: "eq49900000"
    },
    {
        id: "eq49909300",
        title: "Fabric Mender, Except Garment",
        parent: "eq49900000"
    },
    {
        id: "eq49909400",
        title: "Locksmith and Safe Repairer",
        parent: "eq49900000"
    },
    {
        id: "eq49909500",
        title: "Manufactured Building and Mobile Home Installer",
        parent: "eq49900000"
    },
    { id: "eq49909600", title: "Rigger", parent: "eq49900000" },
    {
        id: "eq49909700",
        title: "Signal and Track Switch Repairer",
        parent: "eq49900000"
    },
    {
        id: "eq49909800",
        title: "Helper-Installation, Maintenance, and Repair Worker",
        parent: "eq49900000"
    },
    {
        id: "eq49909900",
        title: "Installation, Maintenance, and Repair Worker",
        parent: "eq49900000"
    },
    { id: "eq23000000", title: "Legal", parent: null },
    {
        id: "eq23100000",
        title: "Lawyers, Judges, and Related Workers",
        parent: "eq23000000"
    },
    { id: "eq23101100", title: "Lawyer", parent: "eq23100000" },
    {
        id: "eq23102100",
        title: "Administrative Law Judge, Adjudicator, and Hearing Officer",
        parent: "eq23100000"
    },
    {
        id: "eq23102151",
        title: "Locum Solicitors",
        parent: "eq23102100"
    },
    {
        id: "eq23102200",
        title: "Arbitrator, Mediator or Conciliator",
        parent: "eq23100000"
    },
    {
        id: "eq23102300",
        title: "Judge, Magistrate Judge or Magistrate",
        parent: "eq23100000"
    },
    {
        id: "eq23200000",
        title: "Legal Support Workers",
        parent: "eq23000000"
    },
    {
        id: "eq23201100",
        title: "Paralegal and Legal Assistant",
        parent: "eq23200000"
    },
    {
        id: "eq23209100",
        title: "Court Reporter",
        parent: "eq23200000"
    },
    {
        id: "eq23209200",
        title: "Law Clerk",
        parent: "eq23200000"
    },
    {
        id: "eq23209300",
        title: "Title Examiner, Abstractor and Searcher",
        parent: "eq23200000"
    },
    {
        id: "eq23209900",
        title: "Legal Support Worker",
        parent: "eq23200000"
    },
    {
        id: "eq19000000",
        title: "Life, Physical and Social Science",
        parent: null
    },
    {
        id: "eq19100000",
        title: "Life Scientists",
        parent: "eq19000000"
    },
    {
        id: "eq19101100",
        title: "Animal Scientist",
        parent: "eq19100000"
    },
    {
        id: "eq19101200",
        title: "Food Scientist and Technologist",
        parent: "eq19100000"
    },
    {
        id: "eq19101300",
        title: "Soil and Plant Scientist",
        parent: "eq19100000"
    },
    {
        id: "eq19102100",
        title: "Biochemist and Biophysicist",
        parent: "eq19100000"
    },
    {
        id: "eq19102200",
        title: "Microbiologist",
        parent: "eq19100000"
    },
    {
        id: "eq19102300",
        title: "Zoologist and Wildlife Biologist",
        parent: "eq19100000"
    },
    {
        id: "eq19102900",
        title: "Biological Scientist",
        parent: "eq19100000"
    },
    {
        id: "eq19103100",
        title: "Conservation Scientist",
        parent: "eq19100000"
    },
    {
        id: "eq19103101",
        title: "Soil Conservationists",
        parent: "eq19103100"
    },
    {
        id: "eq19103102",
        title: "Range Managers",
        parent: "eq19103100"
    },
    {
        id: "eq19103103",
        title: "Park Naturalists",
        parent: "eq19103100"
    },
    {
        id: "eq19103200",
        title: "Forester",
        parent: "eq19100000"
    },
    {
        id: "eq19104100",
        title: "Epidemiologist",
        parent: "eq19100000"
    },
    {
        id: "eq19104200",
        title: "Medical Scientist, Except Epidemiologist",
        parent: "eq19100000"
    },
    {
        id: "eq19109900",
        title: "Life Scientist",
        parent: "eq19100000"
    },
    {
        id: "eq19102001",
        title: "Biologists",
        parent: "eq19100000"
    },
    {
        id: "eq19200000",
        title: "Physical Scientists",
        parent: "eq19000000"
    },
    {
        id: "eq19201100",
        title: "Astronomer",
        parent: "eq19200000"
    },
    {
        id: "eq19201200",
        title: "Physicist",
        parent: "eq19200000"
    },
    {
        id: "eq19202100",
        title: "Atmospheric and Space Scientist",
        parent: "eq19200000"
    },
    { id: "eq19203100", title: "Chemist", parent: "eq19200000" },
    {
        id: "eq19203200",
        title: "Materials Scientist",
        parent: "eq19200000"
    },
    {
        id: "eq19204100",
        title: "Environmental Scientist or Specialist, Including Health",
        parent: "eq19200000"
    },
    {
        id: "eq19204200",
        title: "Geoscientist",
        parent: "eq19200000"
    },
    {
        id: "eq19204201",
        title: "Geologists",
        parent: "eq19204200"
    },
    {
        id: "eq19204300",
        title: "Hydrologist",
        parent: "eq19200000"
    },
    {
        id: "eq19209900",
        title: "Physical Scientist",
        parent: "eq19200000"
    },
    {
        id: "eq19300000",
        title: "Social Scientist and Related Workers",
        parent: "eq19000000"
    },
    {
        id: "eq19301100",
        title: "Economist",
        parent: "eq19300000"
    },
    {
        id: "eq19302100",
        title: "Market Research Analyst",
        parent: "eq19300000"
    },
    {
        id: "eq19302200",
        title: "Survey Researcher",
        parent: "eq19300000"
    },
    {
        id: "eq19303100",
        title: "Clinical, Counseling or School Psychologist",
        parent: "eq19300000"
    },
    {
        id: "eq19303200",
        title: "Industrial-Organizational Psychologist",
        parent: "eq19300000"
    },
    {
        id: "eq19303900",
        title: "Psychologist",
        parent: "eq19300000"
    },
    {
        id: "eq19304100",
        title: "Sociologist",
        parent: "eq19300000"
    },
    {
        id: "eq19305100",
        title: "Urban and Regional Planner",
        parent: "eq19300000"
    },
    {
        id: "eq19309100",
        title: "Anthropologist or Archeologist",
        parent: "eq19300000"
    },
    {
        id: "eq19309200",
        title: "Geographer",
        parent: "eq19300000"
    },
    {
        id: "eq19309300",
        title: "Historian",
        parent: "eq19300000"
    },
    {
        id: "eq19309400",
        title: "Political Scientist",
        parent: "eq19300000"
    },
    {
        id: "eq19309900",
        title: "Social Scientist or Specialist",
        parent: "eq19300000"
    },
    {
        id: "eq19400000",
        title: "Life, Physical, and Social Science Technicians",
        parent: "eq19000000"
    },
    {
        id: "eq19401100",
        title: "Agricultural and Food Science Technician",
        parent: "eq19400000"
    },
    {
        id: "eq19402100",
        title: "Biological Technician",
        parent: "eq19400000"
    },
    {
        id: "eq19403100",
        title: "Chemical Technician",
        parent: "eq19400000"
    },
    {
        id: "eq19404100",
        title: "Geological and Petroleum Technician",
        parent: "eq19400000"
    },
    {
        id: "eq19404101",
        title: "Geological Data Technicians",
        parent: "eq19404100"
    },
    {
        id: "eq19404102",
        title: "Geological Sample Test Technicians",
        parent: "eq19404100"
    },
    {
        id: "eq19405100",
        title: "Nuclear Technician",
        parent: "eq19400000"
    },
    {
        id: "eq19405101",
        title: "Nuclear Equipment Operation Technicians",
        parent: "eq19405100"
    },
    {
        id: "eq19405102",
        title: "Nuclear Monitoring Technicians",
        parent: "eq19405100"
    },
    {
        id: "eq19406100",
        title: "Social Science Research Assistant",
        parent: "eq19400000"
    },
    {
        id: "eq19406101",
        title: "City Planning Aides",
        parent: "eq19406100"
    },
    {
        id: "eq19409100",
        title:
            "Environmental Science and Protection Technician, Including Health",
        parent: "eq19400000"
    },
    {
        id: "eq19409200",
        title: "Forensic Science Technician",
        parent: "eq19400000"
    },
    {
        id: "eq19409300",
        title: "Forest and Conservation Technician",
        parent: "eq19400000"
    },
    {
        id: "eq19409900",
        title: "Life, Physical, and Social Science Technician",
        parent: "eq19400000"
    },
    { id: "eq11000000", title: "Management", parent: null },
    {
        id: "eq11100000",
        title: "Top Executives",
        parent: "eq11000000"
    },
    {
        id: "eq11101100",
        title: "Chief Executive",
        parent: "eq11100000"
    },
    {
        id: "eq11101101",
        title: "Government Service Executives",
        parent: "eq11101100"
    },
    {
        id: "eq11101102",
        title: "Private Sector Executives",
        parent: "eq11101100"
    },
    {
        id: "eq11102100",
        title: "General and Operations Manager",
        parent: "eq11100000"
    },
    {
        id: "eq11103100",
        title: "Legislator",
        parent: "eq11100000"
    },
    {
        id: "eq11303101",
        title: "Treasurers, Controllers, and Chief Financial Officers",
        parent: "eq11103100"
    },
    {
        id: "eq11303102",
        title: "Financial Managers, Branch or Department",
        parent: "eq11103100"
    },
    {
        id: "eq11200000",
        title:
            "Advertising, Marketing, Promotions, Public Relations and Sales Manager",
        parent: "eq11000000"
    },
    {
        id: "eq11201100",
        title: "Advertising and Promotions Manager",
        parent: "eq11200000"
    },
    {
        id: "eq11202000",
        title: "Marketing and Sales Manager",
        parent: "eq11200000"
    },
    {
        id: "eq11202100",
        title: "Marketing Manager",
        parent: "eq11200000"
    },
    {
        id: "eq11202151",
        title: "Market Research Managers",
        parent: "eq11202100"
    },
    {
        id: "eq11202152",
        title: "Network Marketing Managers",
        parent: "eq11202100"
    },
    {
        id: "eq11202153",
        title: "Account Managers",
        parent: "eq11202100"
    },
    {
        id: "eq11202200",
        title: "Sales Manager",
        parent: "eq11200000"
    },
    {
        id: "eq11203100",
        title: "Public Relations Manager",
        parent: "eq11200000"
    },
    {
        id: "eq11300000",
        title: "Operations Specialties Managers",
        parent: "eq11000000"
    },
    {
        id: "eq11301100",
        title: "Administrative Services Manager",
        parent: "eq11300000"
    },
    {
        id: "eq11302100",
        title: "Computer and Information Systems Manager",
        parent: "eq11300000"
    },
    {
        id: "eq11303100",
        title: "Financial Manager",
        parent: "eq11300000"
    },
    {
        id: "eq11304100",
        title: "Compensation and Benefits Manager",
        parent: "eq11300000"
    },
    {
        id: "eq11304200",
        title: "Training and Development Manager",
        parent: "eq11300000"
    },
    {
        id: "eq11304900",
        title: "Human Resources Manager",
        parent: "eq11300000"
    },
    {
        id: "eq11305100",
        title: "Industrial Production Manager",
        parent: "eq11300000"
    },
    {
        id: "eq11306100",
        title: "Purchasing Manager",
        parent: "eq11300000"
    },
    {
        id: "eq11307100",
        title: "Transportation, Storage and Distribution Manager",
        parent: "eq11300000"
    },
    {
        id: "eq11900000",
        title: "Other Management",
        parent: "eq11000000"
    },
    {
        id: "eq11901100",
        title: "Farm, Ranch, and Other Agricultural Manager",
        parent: "eq11900000"
    },
    {
        id: "eq11901101",
        title: "Nursery and Greenhouse Managers",
        parent: "eq11901100"
    },
    {
        id: "eq11901102",
        title: "Agricultural Crop Farm Managers",
        parent: "eq11901100"
    },
    {
        id: "eq11901103",
        title: "Fish Hatchery Managers",
        parent: "eq11901100"
    },
    {
        id: "eq11901200",
        title: "Farmer or Rancher",
        parent: "eq11900000"
    },
    {
        id: "eq11902100",
        title: "Construction Manager",
        parent: "eq11900000"
    },
    {
        id: "eq11903100",
        title: "Education Administrator, Preschool and Child Care Center",
        parent: "eq11900000"
    },
    {
        id: "eq11903200",
        title: "Education Administrator, Elementary and Secondary School",
        parent: "eq11900000"
    },
    {
        id: "eq11903300",
        title: "Education Administrator, Postsecondary",
        parent: "eq11900000"
    },
    {
        id: "eq11903900",
        title: "Education Administrator",
        parent: "eq11900000"
    },
    {
        id: "eq11904100",
        title: "Engineering Manager",
        parent: "eq11900000"
    },
    {
        id: "eq11905100",
        title: "Food Service Manager",
        parent: "eq11900000"
    },
    {
        id: "eq11906100",
        title: "Funeral Director",
        parent: "eq11900000"
    },
    {
        id: "eq11907100",
        title: "Gaming Manager",
        parent: "eq11900000"
    },
    {
        id: "eq11908100",
        title: "Lodging Manager",
        parent: "eq11900000"
    },
    {
        id: "eq11911100",
        title: "Medical and Health Services Manager",
        parent: "eq11900000"
    },
    {
        id: "eq11912100",
        title: "Natural Sciences Manager",
        parent: "eq11900000"
    },
    {
        id: "eq11913100",
        title: "Postmasters and Mail Superintendent",
        parent: "eq11900000"
    },
    {
        id: "eq11914100",
        title: "Property, Real Estate or Community Association Manager",
        parent: "eq11900000"
    },
    {
        id: "eq11915100",
        title: "Social or Community Service Manager",
        parent: "eq11900000"
    },
    { id: "eq11919900", title: "Manager", parent: "eq11900000" },
    {
        id: "eq55000000",
        title: "Military Specific",
        parent: null
    },
    {
        id: "eq55100000",
        title: "Military Officer Special and Tactical Operations",
        parent: "eq55000000"
    },
    {
        id: "eq55101100",
        title: "Air Crew Officer",
        parent: "eq55100000"
    },
    {
        id: "eq55101200",
        title: "Aircraft Launch and Recovery Officer",
        parent: "eq55100000"
    },
    {
        id: "eq55101300",
        title: "Armored Assault Vehicle Officer",
        parent: "eq55100000"
    },
    {
        id: "eq55101400",
        title: "Artillery and Missile Officer",
        parent: "eq55100000"
    },
    {
        id: "eq55101500",
        title: "Command and Control Center Officer",
        parent: "eq55100000"
    },
    {
        id: "eq55101600",
        title: "Infantry Officer",
        parent: "eq55100000"
    },
    {
        id: "eq55101700",
        title: "Special Forces Officer",
        parent: "eq55100000"
    },
    {
        id: "eq55101900",
        title: "Military Officer Special and Tactical Operations",
        parent: "eq55100000"
    },
    {
        id: "eq55200000",
        title: "First-Line Enlisted Military Supervisor/Managers",
        parent: "eq55000000"
    },
    {
        id: "eq55201100",
        title: "First-Line Supervisor of Air Crew Members",
        parent: "eq55200000"
    },
    {
        id: "eq55201200",
        title: "First-Line Supervisor of Weapons Specialists/Crew Members",
        parent: "eq55200000"
    },
    {
        id: "eq55201300",
        title: "First-Line Supervisor of Tactical Operations Specialists",
        parent: "eq55200000"
    },
    {
        id: "eq55300000",
        title:
            "Military Enlisted Tactical Operations and Air/Weapons Specialist and Crew Member",
        parent: "eq55000000"
    },
    {
        id: "eq55301100",
        title: "Air Crew Member",
        parent: "eq55300000"
    },
    {
        id: "eq55301200",
        title: "Aircraft Launch and Recovery Specialist",
        parent: "eq55300000"
    },
    {
        id: "eq55301300",
        title: "Armored Assault Vehicle Crew Member",
        parent: "eq55300000"
    },
    {
        id: "eq55301400",
        title: "Artillery and Missile Crew Member",
        parent: "eq55300000"
    },
    {
        id: "eq55301500",
        title: "Command and Control Center Specialist",
        parent: "eq55300000"
    },
    {
        id: "eq55301600",
        title: "Infantry",
        parent: "eq55300000"
    },
    {
        id: "eq55301700",
        title: "Radar and Sonar Technician",
        parent: "eq55300000"
    },
    {
        id: "eq55301800",
        title: "Special Forces",
        parent: "eq55300000"
    },
    {
        id: "eq55301900",
        title:
            "Military Enlisted Tactical Operations and Air/Weapons Specialist and Crew Member",
        parent: "eq55300000"
    },
    {
        id: "eq43000000",
        title: "Office and Administrative Support",
        parent: null
    },
    {
        id: "eq43100000",
        title: "Supervisors, Office and Administrative Support Workers",
        parent: "eq43000000"
    },
    {
        id: "eq43101100",
        title:
            "First-Line Supervisor of Office and Administrative Support Workers",
        parent: "eq43100000"
    },
    {
        id: "eq43101101",
        title: "First-Line Supervisors, Customer Service",
        parent: "eq43101100"
    },
    {
        id: "eq43101151",
        title: "First-Line Supervisors, Call Center",
        parent: "eq43101100"
    },
    {
        id: "eq43200000",
        title: "Communications Equipment Operators",
        parent: "eq43000000"
    },
    {
        id: "eq43201100",
        title: "Switchboard Operator, Including Answering Service",
        parent: "eq43200000"
    },
    {
        id: "eq43202100",
        title: "Telephone Operator",
        parent: "eq43200000"
    },
    {
        id: "eq43202101",
        title: "Directory Assistance Operators",
        parent: "eq43202100"
    },
    {
        id: "eq43202102",
        title: "Central Office Operators",
        parent: "eq43202100"
    },
    {
        id: "eq43209900",
        title: "Communications Equipment Operator",
        parent: "eq43200000"
    },
    {
        id: "eq43300000",
        title: "Financial Clerks",
        parent: "eq43000000"
    },
    {
        id: "eq43301100",
        title: "Bill and Account Collector",
        parent: "eq43300000"
    },
    {
        id: "eq43302100",
        title: "Billing and Posting Clerk and Machine Operator",
        parent: "eq43300000"
    },
    {
        id: "eq43302101",
        title: "Statement Clerks",
        parent: "eq43302100"
    },
    {
        id: "eq43302102",
        title: "Billing, Cost, and Rate Clerks",
        parent: "eq43302100"
    },
    {
        id: "eq43302103",
        title: "Billing, Posting, and Calculating Machine Operators",
        parent: "eq43302100"
    },
    {
        id: "eq43303100",
        title: "Bookkeeping, Accounting, and Auditing Clerk",
        parent: "eq43300000"
    },
    {
        id: "eq43304100",
        title: "Gaming Cage Worker",
        parent: "eq43300000"
    },
    {
        id: "eq43305100",
        title: "Payroll and Timekeeping Clerk",
        parent: "eq43300000"
    },
    {
        id: "eq43306100",
        title: "Procurement Clerk",
        parent: "eq43300000"
    },
    { id: "eq43307100", title: "Teller", parent: "eq43300000" },
    {
        id: "eq43400000",
        title: "Information and Record Clerks",
        parent: "eq43000000"
    },
    {
        id: "eq43401100",
        title: "Brokerage Clerk",
        parent: "eq43400000"
    },
    {
        id: "eq43402100",
        title: "Correspondence Clerk",
        parent: "eq43400000"
    },
    {
        id: "eq43403100",
        title: "Court, Municipal, and License Clerk",
        parent: "eq43400000"
    },
    {
        id: "eq43404100",
        title: "Credit Authorizer, Checker and Clerk",
        parent: "eq43400000"
    },
    {
        id: "eq43405100",
        title: "Customer Service Representative",
        parent: "eq43400000"
    },
    {
        id: "eq43405101",
        title: "Adjustment Clerks",
        parent: "eq43405100"
    },
    {
        id: "eq43406100",
        title: "Eligibility Interviewer, Government Programs",
        parent: "eq43400000"
    },
    {
        id: "eq43406101",
        title: "Claims Takers, Unemployment Benefits",
        parent: "eq43406100"
    },
    {
        id: "eq43406102",
        title: "Welfare Eligibility Workers and Interviewers",
        parent: "eq43406100"
    },
    {
        id: "eq43407100",
        title: "File Clerk",
        parent: "eq43400000"
    },
    {
        id: "eq43408100",
        title: "Hotel, Motel, and Resort Desk Clerk",
        parent: "eq43400000"
    },
    {
        id: "eq43411100",
        title: "Interviewer, Except Eligibility and Loan",
        parent: "eq43400000"
    },
    {
        id: "eq43412100",
        title: "Library Assistant, Clerical",
        parent: "eq43400000"
    },
    {
        id: "eq43413100",
        title: "Loan Interviewer and Clerk",
        parent: "eq43400000"
    },
    {
        id: "eq43414100",
        title: "New Accounts Clerk",
        parent: "eq43400000"
    },
    {
        id: "eq43415100",
        title: "Order Clerk",
        parent: "eq43400000"
    },
    {
        id: "eq43416100",
        title: "Human Resources Assistant, Except Payroll and Timekeeping",
        parent: "eq43400000"
    },
    {
        id: "eq43417100",
        title: "Receptionist and Information Clerk",
        parent: "eq43400000"
    },
    {
        id: "eq43418100",
        title: "Reservation and Transportation Ticket Agent and Travel Clerk",
        parent: "eq43400000"
    },
    {
        id: "eq43419900",
        title: "Information and Record Clerk",
        parent: "eq43400000"
    },
    {
        id: "eq43500000",
        title:
            "Material Recording, Scheduling, Dispatching, and Distributing Workers",
        parent: "eq43000000"
    },
    {
        id: "eq43501100",
        title: "Cargo and Freight Agent",
        parent: "eq43500000"
    },
    {
        id: "eq43502100",
        title: "Courier and Messenger",
        parent: "eq43500000"
    },
    {
        id: "eq43503100",
        title: "Police, Fire, and Ambulance Dispatcher",
        parent: "eq43500000"
    },
    {
        id: "eq43503200",
        title: "Dispatcher, Except Police, Fire, and Ambulance",
        parent: "eq43500000"
    },
    {
        id: "eq43504100",
        title: "Meter Reader, Utilities",
        parent: "eq43500000"
    },
    {
        id: "eq43505100",
        title: "Postal Service Clerk",
        parent: "eq43500000"
    },
    {
        id: "eq43505200",
        title: "Postal Service Mail Carrier",
        parent: "eq43500000"
    },
    {
        id: "eq43505300",
        title:
            "Postal Service Mail Sorter, Processor and Processing Machine Operator",
        parent: "eq43500000"
    },
    {
        id: "eq43506100",
        title: "Production, Planning, and Expediting Clerk",
        parent: "eq43500000"
    },
    {
        id: "eq43507100",
        title: "Shipping, Receiving, and Traffic Clerk",
        parent: "eq43500000"
    },
    {
        id: "eq43508100",
        title: "Stock Clerk and Order Filler",
        parent: "eq43500000"
    },
    {
        id: "eq43508101",
        title: "Stock Clerks, Sales Floor",
        parent: "eq43508100"
    },
    {
        id: "eq43508102",
        title: "Marking Clerks",
        parent: "eq43508100"
    },
    {
        id: "eq43508103",
        title: "Stock Clerks- Stockroom, Warehouse, or Storage Yard",
        parent: "eq43508100"
    },
    {
        id: "eq43508104",
        title: "Order Fillers, Wholesale and Retail Sales",
        parent: "eq43508100"
    },
    {
        id: "eq43511100",
        title: "Weigher, Measurer, Checker and Sampler, Recordkeeping",
        parent: "eq43500000"
    },
    {
        id: "eq43600000",
        title: "Secretaries and Administrative Assistants",
        parent: "eq43000000"
    },
    {
        id: "eq43601100",
        title: "Executive Secretary and Administrative Assistant",
        parent: "eq43600000"
    },
    {
        id: "eq43601200",
        title: "Legal Secretary",
        parent: "eq43600000"
    },
    {
        id: "eq43601300",
        title: "Medical Secretary",
        parent: "eq43600000"
    },
    {
        id: "eq43601400",
        title: "Secretary, Except Legal, Medical, and Executive",
        parent: "eq43600000"
    },
    {
        id: "eq43900000",
        title: "Other Office and Administrative Support Workers",
        parent: "eq43000000"
    },
    {
        id: "eq43901100",
        title: "Computer Operator",
        parent: "eq43900000"
    },
    {
        id: "eq43902100",
        title: "Data Entry Keyer",
        parent: "eq43900000"
    },
    {
        id: "eq43902200",
        title: "Word Processor and Typist",
        parent: "eq43900000"
    },
    {
        id: "eq43903100",
        title: "Desktop Publisher",
        parent: "eq43900000"
    },
    {
        id: "eq43904100",
        title: "Insurance Claims and Policy Processing Clerk",
        parent: "eq43900000"
    },
    {
        id: "eq43905100",
        title: "Mail Clerk and Mail Machine Operator, Except Postal Service",
        parent: "eq43900000"
    },
    {
        id: "eq43906100",
        title: "Office Clerk, General",
        parent: "eq43900000"
    },
    {
        id: "eq43907100",
        title: "Office Machine Operator, Except Computer",
        parent: "eq43900000"
    },
    {
        id: "eq43907101",
        title: "Duplicating Machine Operators",
        parent: "eq43907100"
    },
    {
        id: "eq43908100",
        title: "Proofreader and Copy Marker",
        parent: "eq43900000"
    },
    {
        id: "eq43911100",
        title: "Statistical Assistant",
        parent: "eq43900000"
    },
    {
        id: "eq43919900",
        title: "Office and Administrative Support Worker",
        parent: "eq43900000"
    },
    {
        id: "eq43919951",
        title: "Volunteer Administrators",
        parent: "eq43919900"
    },
    {
        id: "eq39000000",
        title: "Personal Care and Service",
        parent: null
    },
    {
        id: "eq39100000",
        title: "Supervisors, Personal Care and Service Workers",
        parent: "eq39000000"
    },
    {
        id: "eq39101100",
        title: "Gaming Supervisor",
        parent: "eq39100000"
    },
    {
        id: "eq39101200",
        title: "Slot Key Person",
        parent: "eq39100000"
    },
    {
        id: "eq39102100",
        title: "First-Line Supervisor of Personal Service Workers",
        parent: "eq39100000"
    },
    {
        id: "eq39200000",
        title: "Animal Care and Service Workers",
        parent: "eq39000000"
    },
    {
        id: "eq39201100",
        title: "Animal Trainer",
        parent: "eq39200000"
    },
    {
        id: "eq39202100",
        title: "Nonfarm Animal Caretaker",
        parent: "eq39200000"
    },
    {
        id: "eq39300000",
        title: "Entertainment Attendants and Related Workers",
        parent: "eq39000000"
    },
    {
        id: "eq39301100",
        title: "Gaming Dealer",
        parent: "eq39300000"
    },
    {
        id: "eq39301200",
        title: "Gaming and Sports Book Writer",
        parent: "eq39300000"
    },
    {
        id: "eq39301900",
        title: "Gaming Service Worker",
        parent: "eq39300000"
    },
    {
        id: "eq39302100",
        title: "Motion Picture Projectionist",
        parent: "eq39300000"
    },
    {
        id: "eq39303100",
        title: "Usher, Lobby Attendant and Ticket Taker",
        parent: "eq39300000"
    },
    {
        id: "eq39309100",
        title: "Amusement and Recreation Attendant",
        parent: "eq39300000"
    },
    {
        id: "eq39309200",
        title: "Costume Attendant",
        parent: "eq39300000"
    },
    {
        id: "eq39309300",
        title: "Locker Room, Coatroom, and Dressing Room Attendant",
        parent: "eq39300000"
    },
    {
        id: "eq39309900",
        title: "Entertainment Attendant",
        parent: "eq39300000"
    },
    {
        id: "eq39400000",
        title: "Funeral Service Workers",
        parent: "eq39000000"
    },
    {
        id: "eq39401100",
        title: "Embalmer",
        parent: "eq39400000"
    },
    {
        id: "eq39402100",
        title: "Funeral Attendant",
        parent: "eq39400000"
    },
    {
        id: "eq39500000",
        title: "Personal Appearance Workers",
        parent: "eq39000000"
    },
    { id: "eq39501100", title: "Barber", parent: "eq39500000" },
    {
        id: "eq39501200",
        title: "Hairdresser, Hairstylist and Cosmetologist",
        parent: "eq39500000"
    },
    {
        id: "eq39509100",
        title: "Makeup Artist, Theatrical and Performance",
        parent: "eq39500000"
    },
    {
        id: "eq39509200",
        title: "Manicurist and Pedicurist",
        parent: "eq39500000"
    },
    {
        id: "eq39509300",
        title: "Shampooer",
        parent: "eq39500000"
    },
    {
        id: "eq39509400",
        title: "Skin Care Specialist",
        parent: "eq39500000"
    },
    {
        id: "eq39600000",
        title: "Transportation, Tourism and Lodging Attendants",
        parent: "eq39000000"
    },
    {
        id: "eq39601100",
        title: "Baggage Porter and Bellhop",
        parent: "eq39600000"
    },
    {
        id: "eq39601200",
        title: "Concierge",
        parent: "eq39600000"
    },
    {
        id: "eq39602100",
        title: "Tour Guide and Escort",
        parent: "eq39600000"
    },
    {
        id: "eq39602200",
        title: "Travel Guide",
        parent: "eq39600000"
    },
    {
        id: "eq39603100",
        title: "Flight Attendant",
        parent: "eq39600000"
    },
    {
        id: "eq39603200",
        title: "Transportation Attendant",
        parent: "eq39600000"
    },
    {
        id: "eq39900000",
        title: "Other Personal Care and Service Workers",
        parent: "eq39000000"
    },
    {
        id: "eq39901100",
        title: "Child Care Worker",
        parent: "eq39900000"
    },
    {
        id: "eq39902100",
        title: "Personal and Home Care Aide",
        parent: "eq39900000"
    },
    {
        id: "eq39903100",
        title: "Fitness Trainer and Aerobics Instructor",
        parent: "eq39900000"
    },
    {
        id: "eq39903200",
        title: "Recreation Worker",
        parent: "eq39900000"
    },
    {
        id: "eq39904100",
        title: "Residential Advisor",
        parent: "eq39900000"
    },
    {
        id: "eq39909900",
        title: "Personal Care and Service Worker",
        parent: "eq39900000"
    },
    { id: "eq51000000", title: "Production", parent: null },
    {
        id: "eq51100000",
        title: "Supervisors, Production Workers",
        parent: "eq51000000"
    },
    {
        id: "eq51101100",
        title: "First-Line Supervisor of Production and Operating Workers",
        parent: "eq51100000"
    },
    {
        id: "eq51200000",
        title: "Assemblers and Fabricators",
        parent: "eq51000000"
    },
    {
        id: "eq51201100",
        title: "Aircraft Structure, Surfaces, Rigging and Systems Assembler",
        parent: "eq51200000"
    },
    {
        id: "eq51202100",
        title: "Coil Winder, Taper and Finisher",
        parent: "eq51200000"
    },
    {
        id: "eq51202200",
        title: "Electrical and Electronic Equipment Assembler",
        parent: "eq51200000"
    },
    {
        id: "eq51202300",
        title: "Electromechanical Equipment Assembler",
        parent: "eq51200000"
    },
    {
        id: "eq51203100",
        title: "Engine and Other Machine Assembler",
        parent: "eq51200000"
    },
    {
        id: "eq51204100",
        title: "Structural Metal Fabricator and Fitter",
        parent: "eq51200000"
    },
    {
        id: "eq51209100",
        title: "Fiberglass Laminator and Fabricator",
        parent: "eq51200000"
    },
    {
        id: "eq51209200",
        title: "Team Assembler",
        parent: "eq51200000"
    },
    {
        id: "eq51209300",
        title: "Timing Device Assembler, Adjuster and Calibrator",
        parent: "eq51200000"
    },
    {
        id: "eq51209900",
        title: "Assembler and Fabricator",
        parent: "eq51200000"
    },
    {
        id: "eq51300000",
        title: "Food Processing Workers",
        parent: "eq51000000"
    },
    { id: "eq51301100", title: "Baker", parent: "eq51300000" },
    {
        id: "eq51301101",
        title: "Bakers, Bread and Pastry",
        parent: "eq51301100"
    },
    {
        id: "eq51301102",
        title: "Bakers, Manufacturing",
        parent: "eq51301100"
    },
    {
        id: "eq51302100",
        title: "Butcher and Meat Cutter",
        parent: "eq51300000"
    },
    {
        id: "eq51302200",
        title: "Meat, Poultry, and Fish Cutter and Trimmer",
        parent: "eq51300000"
    },
    {
        id: "eq51302300",
        title: "Slaughterer and Meat Packer",
        parent: "eq51300000"
    },
    {
        id: "eq51309100",
        title:
            "Food and Tobacco Roasting, Baking, and Drying Machine Operator and Tender",
        parent: "eq51300000"
    },
    {
        id: "eq51309200",
        title: "Food Batchmaker",
        parent: "eq51300000"
    },
    {
        id: "eq51309300",
        title: "Food Cooking Machine Operator and Tender",
        parent: "eq51300000"
    },
    {
        id: "eq51400000",
        title: "Metal and Plastic Workers",
        parent: "eq51000000"
    },
    {
        id: "eq51401100",
        title: "Computer-Controlled Machine Tool Operator, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51401101",
        title:
            "Numerical Control Machine Tool Operators and Tenders, Metal and Plastic",
        parent: "eq51401100"
    },
    {
        id: "eq51401200",
        title: "Numerical Tool and Process Control Programmer",
        parent: "eq51400000"
    },
    {
        id: "eq51402100",
        title:
            "Extruding and Drawing Machine Setter, Operator and Tender, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51402200",
        title: "Forging Machine Setter, Operator and Tender, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51402300",
        title: "Rolling Machine Setter, Operator and Tender, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51403100",
        title:
            "Cutting, Punching, and Press Machine Setter, Operator and Tender, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51403200",
        title:
            "Drilling and Boring Machine Tool Setter, Operator and Tender, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51403300",
        title:
            "Grinding, Lapping, Polishing and Buffing Machine Tool Setter, Operator and Tender, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51403400",
        title:
            "Lathe and Turning Machine Tool Setter, Operator and Tender, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51403500",
        title:
            "Milling and Planing Machine Setter, Operator and Tender, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51404100",
        title: "Machinist",
        parent: "eq51400000"
    },
    {
        id: "eq51405100",
        title: "Metal-Refining Furnace Operator and Tender",
        parent: "eq51400000"
    },
    {
        id: "eq51405200",
        title: "Pourer and Caster, Metal",
        parent: "eq51400000"
    },
    {
        id: "eq51406100",
        title: "Model Maker, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51406200",
        title: "Patternmaker, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51407100",
        title: "Foundry Mold and Coremaker",
        parent: "eq51400000"
    },
    {
        id: "eq51407200",
        title:
            "Molding, Coremaking and Casting Machine Setter, Operator and Tender, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51408100",
        title:
            "Multiple Machine Tool Setter, Operator and Tender, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51411100",
        title: "Tool and Die Maker",
        parent: "eq51400000"
    },
    {
        id: "eq51412100",
        title: "Welder, Cutter, Solderer and Brazer",
        parent: "eq51400000"
    },
    {
        id: "eq51412103",
        title: "Welder-Fitters",
        parent: "eq51412100"
    },
    {
        id: "eq51412200",
        title:
            "Welding, Soldering, and Brazing Machine Setter, Operator and Tender",
        parent: "eq51400000"
    },
    {
        id: "eq51419100",
        title:
            "Heat Treating Equipment Setter, Operator and Tender, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51419103",
        title: "Heaters, Metal and Plastic",
        parent: "eq51419100"
    },
    {
        id: "eq51419200",
        title: "Lay-Out Worker, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51419300",
        title:
            "Plating and Coating Machine Setter, Operator and Tender, Metal and Plastic",
        parent: "eq51400000"
    },
    {
        id: "eq51419301",
        title:
            "Electrolytic Plating and Coating Machine Setters and Set-Up Operators, Metal and Plastic",
        parent: "eq51419300"
    },
    {
        id: "eq51419302",
        title:
            "Electrolytic Plating and Coating Machine Operators and Tenders, Metal and Plastic",
        parent: "eq51419300"
    },
    {
        id: "eq51419303",
        title:
            "Nonelectrolytic Plating and Coating Machine Setters and Set-Up Operators, Metal and Plastic",
        parent: "eq51419300"
    },
    {
        id: "eq51419304",
        title:
            "Nonelectrolytic Plating and Coating Machine Operators and Tenders, Metal and Plastic",
        parent: "eq51419300"
    },
    {
        id: "eq51419400",
        title: "Tool Grinder, Filer and Sharpener",
        parent: "eq51400000"
    },
    {
        id: "eq51419900",
        title: "Metal and Plastic Worker",
        parent: "eq51400000"
    },
    {
        id: "eq51500000",
        title: "Printing Workers",
        parent: "eq51000000"
    },
    {
        id: "eq51501100",
        title: "Bindery Worker",
        parent: "eq51500000"
    },
    {
        id: "eq51501101",
        title: "Bindery Machine Setters and Set-Up Operators",
        parent: "eq51501100"
    },
    {
        id: "eq51501102",
        title: "Bindery Machine Operators and Tenders",
        parent: "eq51501100"
    },
    {
        id: "eq51501200",
        title: "Bookbinder",
        parent: "eq51500000"
    },
    {
        id: "eq51502100",
        title: "Job Printer",
        parent: "eq51500000"
    },
    {
        id: "eq51502200",
        title: "Prepress Technician",
        parent: "eq51500000"
    },
    {
        id: "eq51502201",
        title: "Hand Compositors and Typesetters",
        parent: "eq51502200"
    },
    {
        id: "eq51502202",
        title: "Paste-Up Workers",
        parent: "eq51502200"
    },
    {
        id: "eq51502203",
        title: "Photoengravers",
        parent: "eq51502200"
    },
    {
        id: "eq51502204",
        title: "Camera Operators",
        parent: "eq51502200"
    },
    {
        id: "eq51502205",
        title: "Scanner Operators",
        parent: "eq51502200"
    },
    {
        id: "eq51502206",
        title: "Strippers",
        parent: "eq51502200"
    },
    {
        id: "eq51502207",
        title: "Platemakers",
        parent: "eq51502200"
    },
    {
        id: "eq51502208",
        title: "Dot Etchers",
        parent: "eq51502200"
    },
    {
        id: "eq51502209",
        title: "Electronic Masking System Operators",
        parent: "eq51502200"
    },
    {
        id: "eq51502210",
        title: "Electrotypers and Stereotypers",
        parent: "eq51502200"
    },
    {
        id: "eq51502211",
        title: "Plate Finishers",
        parent: "eq51502200"
    },
    {
        id: "eq51502212",
        title: "Typesetting and Composing Machine Operators and Tenders",
        parent: "eq51502200"
    },
    {
        id: "eq51502213",
        title: "Photoengraving and Lithographing Machine Operators and Tenders",
        parent: "eq51502200"
    },
    {
        id: "eq51502300",
        title: "Printing Machine Operator",
        parent: "eq51500000"
    },
    {
        id: "eq51502301",
        title: "Precision Printing Workers",
        parent: "eq51502300"
    },
    {
        id: "eq51502302",
        title: "Offset Lithographic Press Setters and Set-Up Operators",
        parent: "eq51502300"
    },
    {
        id: "eq51502303",
        title: "Letterpress Setters and Set-Up Operators",
        parent: "eq51502300"
    },
    {
        id: "eq51502304",
        title: "Design Printing Machine Setters and Set-Up Operators",
        parent: "eq51502300"
    },
    {
        id: "eq51502305",
        title:
            "Marking and Identification Printing Machine Setters and Set-Up Operators",
        parent: "eq51502300"
    },
    {
        id: "eq51502306",
        title: "Screen Printing Machine Setters and Set-Up Operators",
        parent: "eq51502300"
    },
    {
        id: "eq51502307",
        title: "Embossing Machine Set-Up Operators",
        parent: "eq51502300"
    },
    {
        id: "eq51502308",
        title: "Engraver Set-Up Operators",
        parent: "eq51502300"
    },
    {
        id: "eq51502309",
        title: "Printing Press Machine Operators and Tenders",
        parent: "eq51502300"
    },
    {
        id: "eq51600000",
        title: "Textile, Apparel and Furnishings Workers",
        parent: "eq51000000"
    },
    {
        id: "eq51601100",
        title: "Laundry and Dry-Cleaning Worker",
        parent: "eq51600000"
    },
    {
        id: "eq51601101",
        title: "Spotters, Dry Cleaning",
        parent: "eq51601100"
    },
    {
        id: "eq51601102",
        title: "Precision Dyers",
        parent: "eq51601100"
    },
    {
        id: "eq51601103",
        title:
            "Laundry and Drycleaning Machine Operators and Tenders, Except Pressing",
        parent: "eq51601100"
    },
    {
        id: "eq51602100",
        title: "Presser, Textile, Garment and Related Materials",
        parent: "eq51600000"
    },
    {
        id: "eq51602101",
        title: "Pressers, Delicate Fabrics",
        parent: "eq51602100"
    },
    {
        id: "eq51602102",
        title:
            "Pressing Machine Operators and Tenders- Textile, Garment, and Related Materials",
        parent: "eq51602100"
    },
    {
        id: "eq51602103",
        title: "Pressers, Hand",
        parent: "eq51602100"
    },
    {
        id: "eq51603100",
        title: "Sewing Machine Operator",
        parent: "eq51600000"
    },
    {
        id: "eq51604100",
        title: "Shoe and Leather Worker and Repairer",
        parent: "eq51600000"
    },
    {
        id: "eq51604200",
        title: "Shoe Machine Operator and Tender",
        parent: "eq51600000"
    },
    {
        id: "eq51605100",
        title: "Sewer, Hand",
        parent: "eq51600000"
    },
    {
        id: "eq51605200",
        title: "Tailor, Dressmaker and Custom Sewer",
        parent: "eq51600000"
    },
    {
        id: "eq51606100",
        title: "Textile Bleaching and Dyeing Machine Operator and Tender",
        parent: "eq51600000"
    },
    {
        id: "eq51606200",
        title: "Textile Cutting Machine Setter, Operator and Tender",
        parent: "eq51600000"
    },
    {
        id: "eq51606300",
        title:
            "Textile Knitting and Weaving Machine Setter, Operator and Tender",
        parent: "eq51600000"
    },
    {
        id: "eq51606400",
        title:
            "Textile Winding, Twisting, and Drawing Out Machine Setter, Operator and Tender",
        parent: "eq51600000"
    },
    {
        id: "eq51609100",
        title:
            "Extruding and Forming Machine Setter, Operator and Tender, Synthetic and Glass Fibers",
        parent: "eq51600000"
    },
    {
        id: "eq51609200",
        title: "Fabric and Apparel Patternmaker",
        parent: "eq51600000"
    },
    {
        id: "eq51609300",
        title: "Upholsterer",
        parent: "eq51600000"
    },
    {
        id: "eq51609900",
        title: "Textile, Apparel and Furnishings Worker",
        parent: "eq51600000"
    },
    {
        id: "eq51700000",
        title: "Woodworkers",
        parent: "eq51000000"
    },
    {
        id: "eq51701100",
        title: "Cabinetmaker and Bench Carpenter",
        parent: "eq51700000"
    },
    {
        id: "eq51702100",
        title: "Furniture Finisher",
        parent: "eq51700000"
    },
    {
        id: "eq51703100",
        title: "Model Maker, Wood",
        parent: "eq51700000"
    },
    {
        id: "eq51703200",
        title: "Patternmaker, Wood",
        parent: "eq51700000"
    },
    {
        id: "eq51704100",
        title: "Sawing Machine Setter, Operator and Tender, Wood",
        parent: "eq51700000"
    },
    {
        id: "eq51704200",
        title: "Woodworking Machine Setter, Operator and Tender, Except Sawing",
        parent: "eq51700000"
    },
    {
        id: "eq51709900",
        title: "Woodworker",
        parent: "eq51700000"
    },
    {
        id: "eq51800000",
        title: "Plant and System Operators",
        parent: "eq51000000"
    },
    {
        id: "eq51801100",
        title: "Nuclear Power Reactor Operator",
        parent: "eq51800000"
    },
    {
        id: "eq51801200",
        title: "Power Distributor and Dispatcher",
        parent: "eq51800000"
    },
    {
        id: "eq51801300",
        title: "Power Plant Operator",
        parent: "eq51800000"
    },
    {
        id: "eq51801301",
        title:
            "Power Generating Plant Operators, Except Auxiliary Equipment Operators",
        parent: "eq51801300"
    },
    {
        id: "eq51801302",
        title: "Auxiliary Equipment Operators, Power",
        parent: "eq51801300"
    },
    {
        id: "eq51802100",
        title: "Stationary Engineer and Boiler Operator",
        parent: "eq51800000"
    },
    {
        id: "eq51803100",
        title: "Water and Liquid Waste Treatment Plant and System Operator",
        parent: "eq51800000"
    },
    {
        id: "eq51809100",
        title: "Chemical Plant and System Operator",
        parent: "eq51800000"
    },
    {
        id: "eq51809200",
        title: "Gas Plant Operator",
        parent: "eq51800000"
    },
    {
        id: "eq51809201",
        title: "Gas Processing Plant Operators",
        parent: "eq51809200"
    },
    {
        id: "eq51809202",
        title: "Gas Distribution Plant Operators",
        parent: "eq51809200"
    },
    {
        id: "eq51809300",
        title: "Petroleum Pump System Operator, Refinery Operator and Gauger",
        parent: "eq51800000"
    },
    {
        id: "eq51809900",
        title: "Plant and System Operator",
        parent: "eq51800000"
    },
    {
        id: "eq51900000",
        title: "Other Production",
        parent: "eq51000000"
    },
    {
        id: "eq51901100",
        title: "Chemical Equipment Operator and Tender",
        parent: "eq51900000"
    },
    {
        id: "eq51901200",
        title:
            "Separating, Filtering, Clarifying, Precipitating, and Still Machine Setter, Operator and Tender",
        parent: "eq51900000"
    },
    {
        id: "eq51902100",
        title:
            "Crushing, Grinding, and Polishing Machine Setter, Operator and Tender",
        parent: "eq51900000"
    },
    {
        id: "eq51902200",
        title: "Grinding and Polishing Worker, Hand",
        parent: "eq51900000"
    },
    {
        id: "eq51902300",
        title: "Mixing and Blending Machine Setter, Operator and Tender",
        parent: "eq51900000"
    },
    {
        id: "eq51903100",
        title: "Cutter and Trimmer, Hand",
        parent: "eq51900000"
    },
    {
        id: "eq51903200",
        title: "Cutting and Slicing Machine Setter, Operator and Tender",
        parent: "eq51900000"
    },
    {
        id: "eq51903201",
        title: "Fiber Product Cutting Machine Setters and Set-Up Operators",
        parent: "eq51903200"
    },
    {
        id: "eq51903202",
        title: "Stone Sawyers",
        parent: "eq51903200"
    },
    {
        id: "eq51903203",
        title: "Glass Cutting Machine Setters and Set-Up Operators",
        parent: "eq51903200"
    },
    {
        id: "eq51904100",
        title:
            "Extruding, Forming, Pressing, and Compacting Machine Setter, Operator and Tender",
        parent: "eq51900000"
    },
    {
        id: "eq51905100",
        title: "Furnace, Kiln, Oven, Drier, and Kettle Operators and Tender",
        parent: "eq51900000"
    },
    {
        id: "eq51906100",
        title: "Inspector, Tester, Sorter, Sampler and Weigher",
        parent: "eq51900000"
    },
    {
        id: "eq51906101",
        title: "Materials Inspectors",
        parent: "eq51906100"
    },
    {
        id: "eq51906102",
        title: "Mechanical Inspectors",
        parent: "eq51906100"
    },
    {
        id: "eq51906103",
        title: "Precision Devices Inspectors and Testers",
        parent: "eq51906100"
    },
    {
        id: "eq51906104",
        title: "Electrical and Electronic Inspectors and Testers",
        parent: "eq51906100"
    },
    {
        id: "eq51906105",
        title:
            "Production Inspectors, Testers, Graders, Sorters, Samplers, Weighers",
        parent: "eq51906100"
    },
    {
        id: "eq51907100",
        title: "Jeweler and Precious Stone and Metal Worker",
        parent: "eq51900000"
    },
    {
        id: "eq51907101",
        title: "Jewelers",
        parent: "eq51907100"
    },
    {
        id: "eq51907102",
        title: "Silversmiths",
        parent: "eq51907100"
    },
    {
        id: "eq51907103",
        title: "Model and Mold Makers, Jewelry",
        parent: "eq51907100"
    },
    {
        id: "eq51907104",
        title: "Bench Workers, Jewelry",
        parent: "eq51907100"
    },
    {
        id: "eq51907105",
        title: "Pewter Casters and Finishers",
        parent: "eq51907100"
    },
    {
        id: "eq51907106",
        title: "Gem and Diamond Workers",
        parent: "eq51907100"
    },
    {
        id: "eq51908100",
        title: "Dental Laboratory Technician",
        parent: "eq51900000"
    },
    {
        id: "eq51908200",
        title: "Medical Appliance Technician",
        parent: "eq51900000"
    },
    {
        id: "eq51908300",
        title: "Ophthalmic Laboratory Technician",
        parent: "eq51900000"
    },
    {
        id: "eq51908301",
        title: "Precision Lens Grinders and Polishers",
        parent: "eq51908300"
    },
    {
        id: "eq51908302",
        title: "Optical Instrument Assemblers",
        parent: "eq51908300"
    },
    {
        id: "eq51911100",
        title: "Packaging and Filling Machine Operator and Tender",
        parent: "eq51900000"
    },
    {
        id: "eq51912100",
        title:
            "Coating, Painting, and Spraying Machine Setter, Operator and Tender",
        parent: "eq51900000"
    },
    {
        id: "eq51912200",
        title: "Painter, Transportation Equipment",
        parent: "eq51900000"
    },
    {
        id: "eq51912300",
        title: "Painting, Coating, and Decorating Worker",
        parent: "eq51900000"
    },
    {
        id: "eq51913100",
        title: "Photographic Process Worker",
        parent: "eq51900000"
    },
    {
        id: "eq51913101",
        title: "Photographic Retouchers and Restorers",
        parent: "eq51913100"
    },
    {
        id: "eq51913102",
        title: "Photographic Reproduction Technicians",
        parent: "eq51913100"
    },
    {
        id: "eq51913103",
        title: "Photographic Hand Developers",
        parent: "eq51913100"
    },
    {
        id: "eq51913104",
        title: "Film Laboratory Technicians",
        parent: "eq51913100"
    },
    {
        id: "eq51913200",
        title: "Photographic Processing Machine Operator",
        parent: "eq51900000"
    },
    {
        id: "eq51914100",
        title: "Semiconductor Processor",
        parent: "eq51900000"
    },
    {
        id: "eq51919100",
        title: "Cementing and Gluing Machine Operator and Tender",
        parent: "eq51900000"
    },
    {
        id: "eq51919200",
        title:
            "Cleaning, Washing, and Metal Pickling Equipment Operator and Tender",
        parent: "eq51900000"
    },
    {
        id: "eq51919300",
        title: "Cooling and Freezing Equipment Operator and Tender",
        parent: "eq51900000"
    },
    {
        id: "eq51919400",
        title: "Etcher and Engraver",
        parent: "eq51900000"
    },
    {
        id: "eq51919401",
        title: "Precision Etchers and Engravers, Hand or Machine",
        parent: "eq51919400"
    },
    {
        id: "eq51919500",
        title: "Molder, Shaper and Caster, Except Metal and Plastic",
        parent: "eq51900000"
    },
    {
        id: "eq51919501",
        title: "Precision Mold and Pattern Casters, except Nonferrous Metals",
        parent: "eq51919500"
    },
    {
        id: "eq51919502",
        title: "Precision Pattern and Die Casters, Nonferrous Metals",
        parent: "eq51919500"
    },
    {
        id: "eq51919503",
        title: "Stone Cutters and Carvers",
        parent: "eq51919500"
    },
    {
        id: "eq51919504",
        title: "Glass Blowers, Molders, Benders, and Finishers",
        parent: "eq51919500"
    },
    { id: "eq51919505", title: "Potters", parent: "eq51919500" },
    {
        id: "eq51919506",
        title: "Mold Makers, Hand",
        parent: "eq51919500"
    },
    {
        id: "eq51919507",
        title: "Molding and Casting Workers",
        parent: "eq51919500"
    },
    {
        id: "eq51919600",
        title: "Paper Goods Machine Setter, Operator and Tender",
        parent: "eq51900000"
    },
    {
        id: "eq51919700",
        title: "Tire Builder",
        parent: "eq51900000"
    },
    {
        id: "eq51919800",
        title: "Helper-Production Worker",
        parent: "eq51900000"
    },
    {
        id: "eq51919900",
        title: "Production Worker",
        parent: "eq51900000"
    },
    {
        id: "eq33000000",
        title: "Protective Service",
        parent: null
    },
    {
        id: "eq33100000",
        title: "First-Line Supervisors, Protective Service Workers",
        parent: "eq33000000"
    },
    {
        id: "eq33101100",
        title: "First-Line Supervisor of Correctional Officers",
        parent: "eq33100000"
    },
    {
        id: "eq33101200",
        title: "First-Line Supervisor of Police and Detectives",
        parent: "eq33100000"
    },
    {
        id: "eq33102100",
        title: "First-Line Supervisors of Fire Fighting and Prevention Workers",
        parent: "eq33100000"
    },
    {
        id: "eq33109900",
        title: "First-Line Supervisor, Protective Service Workers",
        parent: "eq33100000"
    },
    {
        id: "eq33200000",
        title: "Fire Fighting and Prevention Workers",
        parent: "eq33000000"
    },
    {
        id: "eq33201100",
        title: "Fire Fighter",
        parent: "eq33200000"
    },
    {
        id: "eq33202100",
        title: "Fire Inspector and Investigator",
        parent: "eq33200000"
    },
    {
        id: "eq33202200",
        title: "Forest Fire Inspector and Prevention Specialist",
        parent: "eq33200000"
    },
    {
        id: "eq33300000",
        title: "Law Enforcement Workers",
        parent: "eq33000000"
    },
    { id: "eq33301100", title: "Bailiff", parent: "eq33300000" },
    {
        id: "eq33301200",
        title: "Correctional Officer and Jailer",
        parent: "eq33300000"
    },
    {
        id: "eq33302100",
        title: "Detective and Criminal Investigator",
        parent: "eq33300000"
    },
    {
        id: "eq33302101",
        title: "Police Detectives",
        parent: "eq33302100"
    },
    {
        id: "eq33302102",
        title: "Police Identification and Records Officers",
        parent: "eq33302100"
    },
    {
        id: "eq33302103",
        title: "Criminal Investigators and Special Agents",
        parent: "eq33302100"
    },
    {
        id: "eq33302104",
        title:
            "Child Support, Missing Persons, and Unemployment Insurance Fraud Investigators",
        parent: "eq33302100"
    },
    {
        id: "eq33302105",
        title: "Immigration and Customs Inspectors",
        parent: "eq33302100"
    },
    {
        id: "eq33303100",
        title: "Fish and Game Warden",
        parent: "eq33300000"
    },
    {
        id: "eq33304100",
        title: "Parking Enforcement Worker",
        parent: "eq33300000"
    },
    {
        id: "eq33305100",
        title: "Police and Sheriff's Patrol Officer",
        parent: "eq33300000"
    },
    {
        id: "eq33305101",
        title: "Police Patrol Officers",
        parent: "eq33305100"
    },
    {
        id: "eq33305102",
        title: "Highway Patrol Pilots",
        parent: "eq33305100"
    },
    {
        id: "eq33305103",
        title: "Sheriffs and Deputy Sheriffs",
        parent: "eq33305100"
    },
    {
        id: "eq33305200",
        title: "Transit and Railroad Police",
        parent: "eq33300000"
    },
    {
        id: "eq33900000",
        title: "Other Protective Service Workers",
        parent: "eq33000000"
    },
    {
        id: "eq33901100",
        title: "Animal Control Worker",
        parent: "eq33900000"
    },
    {
        id: "eq33902100",
        title: "Private Detective and Investigator",
        parent: "eq33900000"
    },
    {
        id: "eq33903100",
        title: "Gaming Surveillance Officer and Gaming Investigator",
        parent: "eq33900000"
    },
    {
        id: "eq33903200",
        title: "Security Guard",
        parent: "eq33900000"
    },
    {
        id: "eq33909100",
        title: "Crossing Guard",
        parent: "eq33900000"
    },
    {
        id: "eq33909200",
        title:
            "Lifeguard, Ski Patrol or Other Recreational Protective Service Worker",
        parent: "eq33900000"
    },
    {
        id: "eq33909900",
        title: "Protective Service Worker",
        parent: "eq33900000"
    },
    {
        id: "eq41000000",
        title: "Sales and Sales Related",
        parent: null
    },
    {
        id: "eq41100000",
        title: "Supervisors, Sales Workers",
        parent: "eq41000000"
    },
    {
        id: "eq41101100",
        title: "First-Line Supervisor of Retail Sales Workers",
        parent: "eq41100000"
    },
    {
        id: "eq41101200",
        title: "First-Line Supervisor of Non-Retail Sales Workers",
        parent: "eq41100000"
    },
    {
        id: "eq41101251",
        title: "First-Line Supervisors/Managers of Retail Sales Workers",
        parent: "eq41101200"
    },
    {
        id: "eq41200000",
        title: "Retail Sales Workers",
        parent: "eq41000000"
    },
    { id: "eq41201100", title: "Cashier", parent: "eq41200000" },
    {
        id: "eq41201200",
        title: "Gaming Change Person and Booth Cashier",
        parent: "eq41200000"
    },
    {
        id: "eq41202100",
        title: "Counter and Rental Clerk",
        parent: "eq41200000"
    },
    {
        id: "eq41202200",
        title: "Parts Salesperson",
        parent: "eq41200000"
    },
    {
        id: "eq41203100",
        title: "Retail Salesperson",
        parent: "eq41200000"
    },
    {
        id: "eq41300000",
        title: "Sales Representative, Services",
        parent: "eq41000000"
    },
    {
        id: "eq41301100",
        title: "Advertising Sales Agent",
        parent: "eq41300000"
    },
    {
        id: "eq41302100",
        title: "Insurance Sales Agent",
        parent: "eq41300000"
    },
    {
        id: "eq41303100",
        title: "Securities, Commodities and Financial Services Sales Agent",
        parent: "eq41300000"
    },
    {
        id: "eq41304100",
        title: "Travel Agent",
        parent: "eq41300000"
    },
    {
        id: "eq41309900",
        title: "Sales Representative, Services",
        parent: "eq41300000"
    },
    {
        id: "eq41400000",
        title: "Sales Representatives, Wholesale and Manufacturing",
        parent: "eq41000000"
    },
    {
        id: "eq41401100",
        title:
            "Sales Representative, Wholesale and Manufacturing, Technical and Scientific Products",
        parent: "eq41400000"
    },
    {
        id: "eq41401101",
        title: "Sales Representatives, Agricultural",
        parent: "eq41401100"
    },
    {
        id: "eq41401102",
        title: "Sales Representatives, Chemical and Pharmaceutical",
        parent: "eq41401100"
    },
    {
        id: "eq41401103",
        title: "Sales Representatives, Electrical/Electronic",
        parent: "eq41401100"
    },
    {
        id: "eq41401104",
        title: "Sales Representatives, Mechanical Equipment and Supplies",
        parent: "eq41401100"
    },
    {
        id: "eq41401105",
        title: "Sales Representatives, Medical",
        parent: "eq41401100"
    },
    {
        id: "eq41401106",
        title: "Sales Representatives, Instruments",
        parent: "eq41401100"
    },
    {
        id: "eq41401200",
        title: "Sales Representative, Wholesale and Manufacturing",
        parent: "eq41400000"
    },
    {
        id: "eq41900000",
        title: "Other Sales and Related Workers",
        parent: "eq41000000"
    },
    {
        id: "eq41901100",
        title: "Demonstrator and Product Promoter",
        parent: "eq41900000"
    },
    { id: "eq41901200", title: "Model", parent: "eq41900000" },
    {
        id: "eq41902100",
        title: "Real Estate Broker",
        parent: "eq41900000"
    },
    {
        id: "eq41902200",
        title: "Real Estate Sales Agent",
        parent: "eq41900000"
    },
    {
        id: "eq41903100",
        title: "Sales Engineer",
        parent: "eq41900000"
    },
    {
        id: "eq41904100",
        title: "Telemarketer",
        parent: "eq41900000"
    },
    {
        id: "eq41909100",
        title:
            "Door-To-Door Sales Worker, News and Street Vendor, and Related Worker",
        parent: "eq41900000"
    },
    {
        id: "eq41909900",
        title: "Sales and Related Worker",
        parent: "eq41900000"
    },
    {
        id: "eq53000000",
        title: "Transportation and Material Moving",
        parent: null
    },
    {
        id: "eq53100000",
        title: "Supervisors, Transportation and Material Moving Workers",
        parent: "eq53000000"
    },
    {
        id: "eq53101100",
        title: "Aircraft Cargo Handling Supervisor",
        parent: "eq53100000"
    },
    {
        id: "eq53102100",
        title:
            "First-Line Supervisor of Helpers, Laborers and Material Movers, Hand",
        parent: "eq53100000"
    },
    {
        id: "eq53103100",
        title:
            "First-Line Supervisor of Transportation and Material-Moving Machine and Vehicle Operators",
        parent: "eq53100000"
    },
    {
        id: "eq53200000",
        title: "Air Transportation Workers",
        parent: "eq53000000"
    },
    {
        id: "eq53201100",
        title: "Airline Pilot, Copilot and Flight Engineer",
        parent: "eq53200000"
    },
    {
        id: "eq53201200",
        title: "Commercial Pilot",
        parent: "eq53200000"
    },
    {
        id: "eq53202100",
        title: "Air Traffic Controller",
        parent: "eq53200000"
    },
    {
        id: "eq53202200",
        title: "Airfield Operations Specialist",
        parent: "eq53200000"
    },
    {
        id: "eq53300000",
        title: "Motor Vehicle Operators",
        parent: "eq53000000"
    },
    {
        id: "eq53301100",
        title: "Ambulance Driver and Attendant",
        parent: "eq53300000"
    },
    {
        id: "eq53302100",
        title: "Bus Driver, Transit and Intercity",
        parent: "eq53300000"
    },
    {
        id: "eq53302200",
        title: "Bus Driver, School",
        parent: "eq53300000"
    },
    {
        id: "eq53303100",
        title: "Driver/Sales Worker",
        parent: "eq53300000"
    },
    {
        id: "eq53303200",
        title: "Truck Driver, Heavy and Tractor-Trailer",
        parent: "eq53300000"
    },
    {
        id: "eq53303300",
        title: "Truck Driver, Light or Delivery Services",
        parent: "eq53300000"
    },
    {
        id: "eq53304100",
        title: "Taxi Driver and Chauffeur",
        parent: "eq53300000"
    },
    {
        id: "eq53309900",
        title: "Motor Vehicle Operator",
        parent: "eq53300000"
    },
    {
        id: "eq53400000",
        title: "Rail Transportation Workers",
        parent: "eq53000000"
    },
    {
        id: "eq53401100",
        title: "Locomotive Engineer",
        parent: "eq53400000"
    },
    {
        id: "eq53401200",
        title: "Locomotive Firer",
        parent: "eq53400000"
    },
    {
        id: "eq53401300",
        title: "Rail Yard Engineer, Dinkey Operator and Hostler",
        parent: "eq53400000"
    },
    {
        id: "eq53402100",
        title: "Railroad Brake, Signal, and Switch Operator",
        parent: "eq53400000"
    },
    {
        id: "eq53402101",
        title: "Train Crew Members",
        parent: "eq53402100"
    },
    {
        id: "eq53402102",
        title: "Railroad Yard Workers",
        parent: "eq53402100"
    },
    {
        id: "eq53403100",
        title: "Railroad Conductor and Yardmaster",
        parent: "eq53400000"
    },
    {
        id: "eq53404100",
        title: "Subway and Streetcar Operator",
        parent: "eq53400000"
    },
    {
        id: "eq53409900",
        title: "Rail Transportation Worker",
        parent: "eq53400000"
    },
    {
        id: "eq53500000",
        title: "Water Transportation Workers",
        parent: "eq53000000"
    },
    {
        id: "eq53501100",
        title: "Sailor and Marine Oiler",
        parent: "eq53500000"
    },
    {
        id: "eq53501101",
        title: "Able Seamen",
        parent: "eq53501100"
    },
    {
        id: "eq53501102",
        title: "Ordinary Seamen and Marine Oilers",
        parent: "eq53501100"
    },
    {
        id: "eq53502100",
        title: "Captain, Mate and Pilot of Water Vessel",
        parent: "eq53500000"
    },
    {
        id: "eq53502101",
        title: "Ship and Boat Captains",
        parent: "eq53502100"
    },
    {
        id: "eq53502102",
        title: "Mates- Ship, Boat, and Barge",
        parent: "eq53502100"
    },
    {
        id: "eq53502103",
        title: "Pilots, Ship",
        parent: "eq53502100"
    },
    {
        id: "eq53502200",
        title: "Motorboat Operator",
        parent: "eq53500000"
    },
    {
        id: "eq53503100",
        title: "Ship Engineer",
        parent: "eq53500000"
    },
    {
        id: "eq53600000",
        title: "Other Transportation Workers",
        parent: "eq53000000"
    },
    {
        id: "eq53601100",
        title: "Bridge and Lock Tender",
        parent: "eq53600000"
    },
    {
        id: "eq53602100",
        title: "Parking Lot Attendant",
        parent: "eq53600000"
    },
    {
        id: "eq53603100",
        title: "Service Station Attendant",
        parent: "eq53600000"
    },
    {
        id: "eq53604100",
        title: "Traffic Technician",
        parent: "eq53600000"
    },
    {
        id: "eq53605100",
        title: "Transportation Inspector",
        parent: "eq53600000"
    },
    {
        id: "eq53605101",
        title: "Aviation Inspectors",
        parent: "eq53605100"
    },
    {
        id: "eq53605102",
        title: "Public Transportation Inspectors",
        parent: "eq53605100"
    },
    {
        id: "eq53605103",
        title: "Marine Cargo Inspectors",
        parent: "eq53605100"
    },
    {
        id: "eq53605104",
        title: "Railroad Inspectors",
        parent: "eq53605100"
    },
    {
        id: "eq53605105",
        title: "Motor Vehicle Inspectors",
        parent: "eq53605100"
    },
    {
        id: "eq53605106",
        title: "Freight Inspectors",
        parent: "eq53605100"
    },
    {
        id: "eq53609900",
        title: "Transportation Worker",
        parent: "eq53600000"
    },
    {
        id: "eq53700000",
        title: "Material Moving Worker",
        parent: "eq53000000"
    },
    {
        id: "eq53701100",
        title: "Conveyor Operator and Tender",
        parent: "eq53700000"
    },
    {
        id: "eq53702100",
        title: "Crane and Tower Operator",
        parent: "eq53700000"
    },
    {
        id: "eq53703100",
        title: "Dredge Operator",
        parent: "eq53700000"
    },
    {
        id: "eq53703200",
        title: "Excavating and Loading Machine and Dragline Operator",
        parent: "eq53700000"
    },
    {
        id: "eq53703300",
        title: "Loading Machine Operator, Underground Mining",
        parent: "eq53700000"
    },
    {
        id: "eq53704100",
        title: "Hoist and Winch Operator",
        parent: "eq53700000"
    },
    {
        id: "eq53705100",
        title: "Industrial Truck and Tractor Operator",
        parent: "eq53700000"
    },
    {
        id: "eq53706100",
        title: "Cleaner of Vehicles and Equipment",
        parent: "eq53700000"
    },
    {
        id: "eq53706200",
        title: "Laborer and Freight, Stock and Material Mover, Hand",
        parent: "eq53700000"
    },
    {
        id: "eq53706201",
        title: "Stevedores, Except Equipment Operators",
        parent: "eq53706200"
    },
    {
        id: "eq53706202",
        title:
            "Grips and Set-Up Workers, Motion Picture Sets, Studios, and Stages",
        parent: "eq53706200"
    },
    {
        id: "eq53706203",
        title: "Freight, Stock, and Material Movers, Hand",
        parent: "eq53706200"
    },
    {
        id: "eq53706300",
        title: "Machine Feeder and Offbearer",
        parent: "eq53700000"
    },
    {
        id: "eq53706400",
        title: "Packer and Packager, Hand",
        parent: "eq53700000"
    },
    {
        id: "eq53707100",
        title: "Gas Compressor and Gas Pumping Station Operator",
        parent: "eq53700000"
    },
    {
        id: "eq53707200",
        title: "Pump Operator",
        parent: "eq53700000"
    },
    {
        id: "eq53707300",
        title: "Wellhead Pumper",
        parent: "eq53700000"
    },
    {
        id: "eq53708100",
        title: "Refuse and Recyclable Material Collector",
        parent: "eq53700000"
    },
    {
        id: "eq53711100",
        title: "Shuttle Car Operator",
        parent: "eq53700000"
    },
    {
        id: "eq53712100",
        title: "Tank Car, Truck, and Ship Loader",
        parent: "eq53700000"
    },
    {
        id: "eq53719900",
        title: "Material Moving Worker",
        parent: "eq53700000"
    }
];

export const industries = [
    { id: "eqDEFAULT", title: "(Default)", parent: null },
    {
        id: "eq1",
        title: "Advertising/Public Relations",
        parent: null
    },
    { id: "eq2", title: "Aerospace/Defense", parent: null },
    { id: "eq3", title: "Agriculture", parent: null },
    {
        id: "eq4",
        title: "Athletic/Sporting Goods",
        parent: null
    },
    { id: "eq5", title: "Automotive", parent: null },
    { id: "eq6", title: "Banks", parent: null },
    { id: "eq7", title: "Biotechnology", parent: null },
    { id: "eq8", title: "Chemicals", parent: null },
    { id: "eq9", title: "Computers", parent: null },
    { id: "eq10", title: "Construction", parent: null },
    { id: "eq11", title: "Consulting", parent: null },
    { id: "eq12", title: "Consumer Products", parent: null },
    { id: "eq13", title: "Consumer Services", parent: null },
    { id: "eq14", title: "Distribution", parent: null },
    { id: "eq15", title: "Education", parent: null },
    { id: "eq16", title: "Energy and Utilities", parent: null },
    { id: "eq17", title: "Entertainment / Arts", parent: null },
    { id: "eq18", title: "Environmental", parent: null },
    {
        id: "eq19",
        title: "Financial / Real estate / Brokerage",
        parent: null
    },
    { id: "eq20", title: "Food & Beverage", parent: null },
    {
        id: "eq21",
        title: "Furniture and Fixtures",
        parent: null
    },
    { id: "eq22", title: "Government", parent: null },
    { id: "eq23", title: "Health Care", parent: null },
    {
        id: "eq24",
        title: "Heating, Cooling & Ventilation",
        parent: null
    },
    { id: "eq25", title: "Hospitality", parent: null },
    { id: "eq26", title: "Import/Export", parent: null },
    { id: "eq27", title: "International", parent: null },
    { id: "eq56", title: "Internet", parent: null },
    {
        id: "eq28",
        title: "Journalism / Printing / Publishing",
        parent: null
    },
    { id: "eq29", title: "Law", parent: null },
    { id: "eq30", title: "Leasing", parent: null },
    { id: "eq31", title: "Lumber & Wood ", parent: null },
    {
        id: "eq32",
        title: "Machinery, Tool & Die",
        parent: null
    },
    { id: "eq33", title: "Manufacturing", parent: null },
    { id: "eq34", title: "Metal Industries", parent: null },
    { id: "eq35", title: "Mining", parent: null },
    { id: "eq36", title: "Non-profit", parent: null },
    { id: "eq37", title: "Oil & Gas", parent: null },
    { id: "eq38", title: "Other", parent: null },
    { id: "eq39", title: "Packaging", parent: null },
    { id: "eq40", title: "Paper", parent: null },
    { id: "eq41", title: "Pharmaceuticals", parent: null },
    { id: "eq42", title: "Plastic & Rubber", parent: null },
    {
        id: "eq43",
        title: "Printing & Publishing",
        parent: null
    },
    { id: "eq44", title: "Professional Services", parent: null },
    { id: "eq45", title: "Raw Materials", parent: null },
    { id: "eq46", title: "Real Estate", parent: null },
    { id: "eq47", title: "Retail and Wholesale", parent: null },
    { id: "eq48", title: "Social Services", parent: null },
    { id: "eq49", title: "Staffing/HR", parent: null },
    { id: "eq50", title: "Telecommunications", parent: null },
    { id: "eq51", title: "Textiles", parent: null },
    { id: "eq52", title: "Tobacco", parent: null },
    { id: "eq55", title: "Tourism", parent: null },
    { id: "eq53", title: "Transportation", parent: null },
    { id: "eq54", title: "Utilities", parent: null }
];

export const states = [
    { id: "eqDEFAULT", title: "(Default)", parent: null },
    { id: "eqAF", title: "Afghanistan", parent: null },
    { id: "eqAF-BDS", title: "Badakhshan", parent: "eqAF" },
    { id: "eqAF-BDG", title: "Badghis", parent: "eqAF" },
    { id: "eqAF-BGL", title: "Baghlan", parent: "eqAF" },
    { id: "eqAF-BAL", title: "Balkh", parent: "eqAF" },
    { id: "eqAF-BAM", title: "Bamian", parent: "eqAF" },
    { id: "eqAF-FRA", title: "Farah", parent: "eqAF" },
    { id: "eqAF-FYB", title: "Faryab", parent: "eqAF" },
    { id: "eqAF-GHA", title: "Ghazni", parent: "eqAF" },
    { id: "eqAF-GHO", title: "Ghowr", parent: "eqAF" },
    { id: "eqAF-HEL", title: "Helmand", parent: "eqAF" },
    { id: "eqAF-HER", title: "Herat", parent: "eqAF" },
    { id: "eqAF-JOW", title: "Jowzjan", parent: "eqAF" },
    { id: "eqAF-KAB", title: "Kabul (Kabol)", parent: "eqAF" },
    { id: "eqAF-KAN", title: "Kandahar", parent: "eqAF" },
    { id: "eqAF-KAP", title: "Kapisa", parent: "eqAF" },
    { id: "eqAF-KNR", title: "Konar (Kunar)", parent: "eqAF" },
    { id: "eqAF-KDZ", title: "Kondoz (Kunduz)", parent: "eqAF" },
    { id: "eqAF-LAG", title: "Laghman", parent: "eqAF" },
    { id: "eqAF-LOW", title: "Lowgar", parent: "eqAF" },
    {
        id: "eqAF-NAN",
        title: "Nangrahar (Nangarhar)",
        parent: "eqAF"
    },
    { id: "eqAF-NIM", title: "Nimruz", parent: "eqAF" },
    { id: "eqAF-ORU", title: "Oruzgan (Uruzga", parent: "eqAF" },
    { id: "eqAF-PIA", title: "Paktia", parent: "eqAF" },
    { id: "eqAF-PKA", title: "Paktika", parent: "eqAF" },
    { id: "eqAF-PAR", title: "Parwan", parent: "eqAF" },
    { id: "eqAF-SAM", title: "Samangan", parent: "eqAF" },
    { id: "eqAF-SAR", title: "Sar-e Pol", parent: "eqAF" },
    { id: "eqAF-TAK", title: "Takhar", parent: "eqAF" },
    { id: "eqAF-WAR", title: "Wardak (Wardag)", parent: "eqAF" },
    { id: "eqAF-ZAB", title: "Zabol (Zabul)", parent: "eqAF" },
    { id: "eqAL", title: "Albania", parent: null },
    { id: "eqAL-BR", title: "Berat", parent: "eqAL" },
    { id: "eqAL-BU", title: "Bulqizë", parent: "eqAL" },
    { id: "eqAL-DL", title: "Delvinë", parent: "eqAL" },
    { id: "eqAL-DV", title: "Devoll", parent: "eqAL" },
    { id: "eqAL-DI", title: "Dibër", parent: "eqAL" },
    { id: "eqAL-DR", title: "Durrës", parent: "eqAL" },
    { id: "eqAL-EL", title: "Elbasan", parent: "eqAL" },
    { id: "eqAL-FR", title: "Fier", parent: "eqAL" },
    { id: "eqAL-GR", title: "Gramsh", parent: "eqAL" },
    { id: "eqAL-GJ", title: "Gjirokastër", parent: "eqAL" },
    { id: "eqAL-HA", title: "Has", parent: "eqAL" },
    { id: "eqAL-KA", title: "Kavajë", parent: "eqAL" },
    { id: "eqAL-ER", title: "Kolonjë", parent: "eqAL" },
    { id: "eqAL-KO", title: "Korcë", parent: "eqAL" },
    { id: "eqAL-KR", title: "Krujë", parent: "eqAL" },
    { id: "eqAL-KC", title: "Kucovë", parent: "eqAL" },
    { id: "eqAL-KU", title: "Kukës", parent: "eqAL" },
    { id: "eqAL-LA", title: "Laç", parent: "eqAL" },
    { id: "eqAL-LE", title: "Lezhë", parent: "eqAL" },
    { id: "eqAL-LB", title: "Librazhd", parent: "eqAL" },
    { id: "eqAL-LU", title: "Lushnjë", parent: "eqAL" },
    { id: "eqAL-MM", title: "Malësia e Madhe", parent: "eqAL" },
    { id: "eqAL-MK", title: "Mallakastër", parent: "eqAL" },
    { id: "eqAL-MT", title: "Mat", parent: "eqAL" },
    { id: "eqAL-MR", title: "Mirditë", parent: "eqAL" },
    { id: "eqAL-PQ", title: "Peqin", parent: "eqAL" },
    { id: "eqAL-PR", title: "Përmet", parent: "eqAL" },
    { id: "eqAL-PG", title: "Pogradec", parent: "eqAL" },
    { id: "eqAL-PU", title: "Pukë", parent: "eqAL" },
    { id: "eqAL-SR", title: "Sarandë", parent: "eqAL" },
    { id: "eqAL-SK", title: "Skrapar", parent: "eqAL" },
    { id: "eqAL-SH", title: "Shkodër", parent: "eqAL" },
    { id: "eqAL-TE", title: "Tepelenë", parent: "eqAL" },
    { id: "eqAL-TR", title: "Tiranë", parent: "eqAL" },
    { id: "eqAL-TP", title: "Tropojë", parent: "eqAL" },
    { id: "eqAL-VL", title: "Vlorë", parent: "eqAL" },
    { id: "eqDZ", title: "Algeria", parent: null },
    { id: "eqDZ-01", title: "Adrar", parent: "eqDZ" },
    { id: "eqDZ-44", title: "Aïn Defla", parent: "eqDZ" },
    { id: "eqDZ-46", title: "Aïn Témouchent", parent: "eqDZ" },
    { id: "eqDZ-16", title: "Alger", parent: "eqDZ" },
    { id: "eqDZ-05", title: "Batna", parent: "eqDZ" },
    { id: "eqDZ-08", title: "Béchar", parent: "eqDZ" },
    { id: "eqDZ-06", title: "Béjaïa", parent: "eqDZ" },
    { id: "eqDZ-07", title: "Biskra", parent: "eqDZ" },
    { id: "eqDZ-09", title: "Blida", parent: "eqDZ" },
    {
        id: "eqDZ-34",
        title: "Bordj Bou Arréridj",
        parent: "eqDZ"
    },
    { id: "eqDZ-10", title: "Bouira", parent: "eqDZ" },
    { id: "eqDZ-35", title: "Boumerdès", parent: "eqDZ" },
    { id: "eqDZ-02", title: "Chlef", parent: "eqDZ" },
    { id: "eqDZ-25", title: "Constantine", parent: "eqDZ" },
    { id: "eqDZ-17", title: "Djelfa", parent: "eqDZ" },
    { id: "eqDZ-32", title: "El Bayadh", parent: "eqDZ" },
    { id: "eqDZ-39", title: "El Oued", parent: "eqDZ" },
    { id: "eqDZ-36", title: "El Tarf", parent: "eqDZ" },
    { id: "eqDZ-47", title: "Ghardaïa", parent: "eqDZ" },
    { id: "eqDZ-24", title: "Guelma", parent: "eqDZ" },
    { id: "eqDZ-33", title: "Illizi", parent: "eqDZ" },
    { id: "eqDZ-18", title: "Jijel", parent: "eqDZ" },
    { id: "eqDZ-40", title: "Khenchela", parent: "eqDZ" },
    { id: "eqDZ-03", title: "Laghouat", parent: "eqDZ" },
    { id: "eqDZ-29", title: "Mascara", parent: "eqDZ" },
    { id: "eqDZ-26", title: "Médéa", parent: "eqDZ" },
    { id: "eqDZ-43", title: "Mila", parent: "eqDZ" },
    { id: "eqDZ-27", title: "Mostaganem", parent: "eqDZ" },
    { id: "eqDZ-28", title: "Msila", parent: "eqDZ" },
    { id: "eqDZ-45", title: "Naama", parent: "eqDZ" },
    { id: "eqDZ-31", title: "Oran", parent: "eqDZ" },
    { id: "eqDZ-30", title: "Ouargla", parent: "eqDZ" },
    { id: "eqDZ-04", title: "Oum el Bouaghi", parent: "eqDZ" },
    { id: "eqDZ-48", title: "Relizane", parent: "eqDZ" },
    { id: "eqDZ-20", title: "Saïda", parent: "eqDZ" },
    { id: "eqDZ-19", title: "Sétif", parent: "eqDZ" },
    { id: "eqDZ-22", title: "Sidi Bel Abbès", parent: "eqDZ" },
    { id: "eqDZ-21", title: "Skikda", parent: "eqDZ" },
    { id: "eqDZ-41", title: "Souk Ahras", parent: "eqDZ" },
    { id: "eqDZ-11", title: "Tamanghasset", parent: "eqDZ" },
    { id: "eqDZ-12", title: "Tébessa", parent: "eqDZ" },
    { id: "eqDZ-14", title: "Tiaret", parent: "eqDZ" },
    { id: "eqDZ-37", title: "Tindouf", parent: "eqDZ" },
    { id: "eqDZ-42", title: "Tipaza", parent: "eqDZ" },
    { id: "eqDZ-38", title: "Tissemsilt", parent: "eqDZ" },
    { id: "eqDZ-15", title: "Tizi Ouzou", parent: "eqDZ" },
    { id: "eqDZ-13", title: "Tlemcen", parent: "eqDZ" },
    { id: "eqAS", title: "American Samoa", parent: null },
    { id: "eqAS-AS", title: "American Samoa", parent: "eqAS" },
    { id: "eqAD", title: "Andorra", parent: null },
    { id: "eqAD-AD", title: "Andorra", parent: "eqAD" },
    { id: "eqAO", title: "Angola", parent: null },
    { id: "eqAO-BGO", title: "Bengo", parent: "eqAO" },
    { id: "eqAO-BGU", title: "Benguela", parent: "eqAO" },
    { id: "eqAO-BIE", title: "Bié", parent: "eqAO" },
    { id: "eqAO-CAB", title: "Cabinda", parent: "eqAO" },
    { id: "eqAO-CCU", title: "Cuando-Cubango", parent: "eqAO" },
    { id: "eqAO-CNO", title: "Cuanza Norte", parent: "eqAO" },
    { id: "eqAO-CUS", title: "Cuanza Sul", parent: "eqAO" },
    { id: "eqAO-CNN", title: "Cunene", parent: "eqAO" },
    { id: "eqAO-HUA", title: "Huambo", parent: "eqAO" },
    { id: "eqAO-HUI", title: "Huíla", parent: "eqAO" },
    { id: "eqAO-LUA", title: "Luanda", parent: "eqAO" },
    { id: "eqAO-LNO", title: "Lunda Norte", parent: "eqAO" },
    { id: "eqAO-LSU", title: "Lunda Sul", parent: "eqAO" },
    { id: "eqAO-MAL", title: "Malange", parent: "eqAO" },
    { id: "eqAO-MOX", title: "Moxico", parent: "eqAO" },
    { id: "eqAO-NAM", title: "Namibe", parent: "eqAO" },
    { id: "eqAO-UIG", title: "Uíge", parent: "eqAO" },
    { id: "eqAO-ZAI", title: "Zaïre", parent: "eqAO" },
    { id: "eqAI", title: "Anguilla", parent: null },
    { id: "eqAI-AI", title: "Anguilla", parent: "eqAI" },
    { id: "eqAQ", title: "Antarctica", parent: null },
    { id: "eqAQ-AQ", title: "Antarctica", parent: "eqAQ" },
    { id: "eqAG", title: "Antigua & Barbuda", parent: null },
    {
        id: "eqAG-AG",
        title: "Antigua & Barbuda",
        parent: "eqAG"
    },
    { id: "eqAR", title: "Argentina", parent: null },
    { id: "eqAR-C", title: "Capital federal", parent: "eqAR" },
    { id: "eqAR-B", title: "Buenos Aires", parent: "eqAR" },
    { id: "eqAR-K", title: "Catamarca", parent: "eqAR" },
    { id: "eqAR-X", title: "Córdoba", parent: "eqAR" },
    { id: "eqAR-W", title: "Corrientes", parent: "eqAR" },
    { id: "eqAR-H", title: "Chaco", parent: "eqAR" },
    { id: "eqAR-U", title: "Chubut", parent: "eqAR" },
    { id: "eqAR-E", title: "Entre Ríos", parent: "eqAR" },
    { id: "eqAR-P", title: "Formosa", parent: "eqAR" },
    { id: "eqAR-Y", title: "Jujuy", parent: "eqAR" },
    { id: "eqAR-L", title: "La Pampa", parent: "eqAR" },
    { id: "eqAR-F", title: "La Rioja", parent: "eqAR" },
    { id: "eqAR-M", title: "Mendoza", parent: "eqAR" },
    { id: "eqAR-N", title: "Misiones", parent: "eqAR" },
    { id: "eqAR-Q", title: "Neuquén", parent: "eqAR" },
    { id: "eqAR-R", title: "Río Negro", parent: "eqAR" },
    { id: "eqAR-A", title: "Salta", parent: "eqAR" },
    { id: "eqAR-J", title: "San Juan", parent: "eqAR" },
    { id: "eqAR-D", title: "San Luis", parent: "eqAR" },
    { id: "eqAR-Z", title: "Santa Cruz", parent: "eqAR" },
    { id: "eqAR-S", title: "Santa Fe", parent: "eqAR" },
    {
        id: "eqAR-G",
        title: "Santiago del Estero",
        parent: "eqAR"
    },
    { id: "eqAR-V", title: "Tierra del Fuego", parent: "eqAR" },
    { id: "eqAR-T", title: "Tucumán", parent: "eqAR" },
    { id: "eqAM", title: "Armenia", parent: null },
    { id: "eqAM-ER", title: "Erevan", parent: "eqAM" },
    { id: "eqAM-AG", title: "Aragacotn", parent: "eqAM" },
    { id: "eqAM-AR", title: "Ararat", parent: "eqAM" },
    { id: "eqAM-AV", title: "Armavir", parent: "eqAM" },
    { id: "eqAM-GR", title: "Gegark'unik'", parent: "eqAM" },
    { id: "eqAM-KT", title: "Kotayk'", parent: "eqAM" },
    { id: "eqAM-LO", title: "Lory", parent: "eqAM" },
    { id: "eqAM-SH", title: "Širak", parent: "eqAM" },
    { id: "eqAM-SU", title: "Syunik'", parent: "eqAM" },
    { id: "eqAM-TV", title: "Tavuš", parent: "eqAM" },
    { id: "eqAM-VD", title: "Vayoc Jor", parent: "eqAM" },
    { id: "eqAW", title: "Aruba", parent: null },
    { id: "eqAW-AW", title: "Aruba", parent: "eqAW" },
    { id: "eqAU", title: "Australia", parent: null },
    { id: "eqAU-NS", title: "New South Wales", parent: "eqAU" },
    { id: "eqAU-QL", title: "Queensland", parent: "eqAU" },
    { id: "eqAU-SA", title: "South Australia", parent: "eqAU" },
    { id: "eqAU-TS", title: "Tasmania", parent: "eqAU" },
    { id: "eqAU-VI", title: "Victoria", parent: "eqAU" },
    {
        id: "eqAU-WA",
        title: "Western Australia",
        parent: "eqAU"
    },
    {
        id: "eqAU-CT",
        title: "Australian Capital Territory",
        parent: "eqAU"
    },
    {
        id: "eqAU-NT",
        title: "Northern Territory",
        parent: "eqAU"
    },
    { id: "eqAT", title: "Austria", parent: null },
    { id: "eqAT-1", title: "Burgenland", parent: "eqAT" },
    { id: "eqAT-2", title: "Kärnten", parent: "eqAT" },
    { id: "eqAT-3", title: "Niederösterreich", parent: "eqAT" },
    { id: "eqAT-4", title: "Oberösterreich", parent: "eqAT" },
    { id: "eqAT-5", title: "Salzburg", parent: "eqAT" },
    { id: "eqAT-6", title: "Steiermark", parent: "eqAT" },
    { id: "eqAT-7", title: "Tirol", parent: "eqAT" },
    { id: "eqAT-8", title: "Vorarlberg", parent: "eqAT" },
    { id: "eqAT-9", title: "Wien", parent: "eqAT" },
    { id: "eqAZ", title: "Azerbaijan", parent: null },
    { id: "eqAZ-MM", title: "Naxçivan", parent: "eqAZ" },
    { id: "eqAZ-AB", title: "Äli Bayramli", parent: "eqAZ" },
    { id: "eqAZ-BA", title: "Baki", parent: "eqAZ" },
    { id: "eqAZ-GA", title: "Gäncä", parent: "eqAZ" },
    { id: "eqAZ-LA", title: "Länkäran", parent: "eqAZ" },
    { id: "eqAZ-MI", title: "Mingäçevir", parent: "eqAZ" },
    { id: "eqAZ-NA", title: "Naftalan", parent: "eqAZ" },
    { id: "eqAZ-SA", title: "Säki", parent: "eqAZ" },
    { id: "eqAZ-SM", title: "Sumqayit", parent: "eqAZ" },
    { id: "eqAZ-SS", title: "Susa", parent: "eqAZ" },
    { id: "eqAZ-XA", title: "Xankändi", parent: "eqAZ" },
    { id: "eqAZ-YE", title: "Yevlax", parent: "eqAZ" },
    { id: "eqAZ-ABS", title: "Abseron", parent: "eqAZ" },
    { id: "eqAZ-AGC", title: "Agcabädi", parent: "eqAZ" },
    { id: "eqAZ-AGM", title: "Agdam", parent: "eqAZ" },
    { id: "eqAZ-AGS", title: "Agdas", parent: "eqAZ" },
    { id: "eqAZ-AGA", title: "Agstafa", parent: "eqAZ" },
    { id: "eqAZ-AGU", title: "Agsu", parent: "eqAZ" },
    { id: "eqAZ-AST", title: "Astara", parent: "eqAZ" },
    { id: "eqAZ-BAB", title: "Babäk", parent: "eqAZ" },
    { id: "eqAZ-BAL", title: "Balakän", parent: "eqAZ" },
    { id: "eqAZ-BAR", title: "Bärdä", parent: "eqAZ" },
    { id: "eqAZ-BEY", title: "Beyläqan", parent: "eqAZ" },
    { id: "eqAZ-BIL", title: "Biläsuvar", parent: "eqAZ" },
    { id: "eqAZ-CAB", title: "Cäbrayil", parent: "eqAZ" },
    { id: "eqAZ-CAL", title: "Cälilabad", parent: "eqAZ" },
    { id: "eqAZ-CUL", title: "Culfa", parent: "eqAZ" },
    { id: "eqAZ-DAS", title: "Daskäsän", parent: "eqAZ" },
    { id: "eqAZ-DAV", title: "Däväçi", parent: "eqAZ" },
    { id: "eqAZ-FUZ", title: "Füzuli", parent: "eqAZ" },
    { id: "eqAZ-GAD", title: "Gädäbäy", parent: "eqAZ" },
    { id: "eqAZ-GOR", title: "Goranboy", parent: "eqAZ" },
    { id: "eqAZ-GOY", title: "Göyçay", parent: "eqAZ" },
    { id: "eqAZ-HAC", title: "Haciqabul", parent: "eqAZ" },
    { id: "eqAZ-IMI", title: "Imisli", parent: "eqAZ" },
    { id: "eqAZ-ISM", title: "Ismayilli", parent: "eqAZ" },
    { id: "eqAZ-KAL", title: "Kälbäcär", parent: "eqAZ" },
    { id: "eqAZ-KUR", title: "Kürdämir", parent: "eqAZ" },
    { id: "eqAZ-LAC", title: "Laçin", parent: "eqAZ" },
    { id: "eqAZ-LAN", title: "Länkäran", parent: "eqAZ" },
    { id: "eqAZ-LER", title: "Lerik", parent: "eqAZ" },
    { id: "eqAZ-MAS", title: "Masalli", parent: "eqAZ" },
    { id: "eqAZ-NEF", title: "Neftçala", parent: "eqAZ" },
    { id: "eqAZ-OGU", title: "Oguz", parent: "eqAZ" },
    { id: "eqAZ-ORD", title: "Ordubad", parent: "eqAZ" },
    { id: "eqAZ-QAB", title: "Qäbälä", parent: "eqAZ" },
    { id: "eqAZ-QAX", title: "Qax", parent: "eqAZ" },
    { id: "eqAZ-QAZ", title: "Qazax", parent: "eqAZ" },
    { id: "eqAZ-QOB", title: "Qobustan", parent: "eqAZ" },
    { id: "eqAZ-QBA", title: "Quba", parent: "eqAZ" },
    { id: "eqAZ-QBI", title: "Qubadli", parent: "eqAZ" },
    { id: "eqAZ-QUS", title: "Qusar", parent: "eqAZ" },
    { id: "eqAZ-SAT", title: "Saatli", parent: "eqAZ" },
    { id: "eqAZ-SAB", title: "Sabirabad", parent: "eqAZ" },
    { id: "eqAZ-SAD", title: "Sädäräk", parent: "eqAZ" },
    { id: "eqAZ-SAH", title: "Sahbuz", parent: "eqAZ" },
    { id: "eqAZ-SAK", title: "Säki", parent: "eqAZ" },
    { id: "eqAZ-SAL", title: "Salyan", parent: "eqAZ" },
    { id: "eqAZ-SMI", title: "Samaxi", parent: "eqAZ" },
    { id: "eqAZ-SKR", title: "Sämkir", parent: "eqAZ" },
    { id: "eqAZ-SMX", title: "Samux", parent: "eqAZ" },
    { id: "eqAZ-SAR", title: "Särur", parent: "eqAZ" },
    { id: "eqAZ-SIY", title: "Siyäzän", parent: "eqAZ" },
    { id: "eqAZ-SUS", title: "Susa", parent: "eqAZ" },
    { id: "eqAZ-TAR", title: "Tärtär", parent: "eqAZ" },
    { id: "eqAZ-TOV", title: "Tovuz", parent: "eqAZ" },
    { id: "eqAZ-UCA", title: "Ucar", parent: "eqAZ" },
    { id: "eqAZ-XAC", title: "Xaçmaz", parent: "eqAZ" },
    { id: "eqAZ-XAN", title: "Xanlar", parent: "eqAZ" },
    { id: "eqAZ-XIZ", title: "Xizi", parent: "eqAZ" },
    { id: "eqAZ-XCI", title: "Xocali", parent: "eqAZ" },
    { id: "eqAZ-XVD", title: "Xocavänd", parent: "eqAZ" },
    { id: "eqAZ-YAR", title: "Yardimli", parent: "eqAZ" },
    { id: "eqAZ-YEV", title: "Yevlax", parent: "eqAZ" },
    { id: "eqAZ-ZAN", title: "Zängilan", parent: "eqAZ" },
    { id: "eqAZ-ZAQ", title: "Zaqatala", parent: "eqAZ" },
    { id: "eqAZ-ZAR", title: "Zärdab", parent: "eqAZ" },
    { id: "eqBS", title: "Bahamas", parent: null },
    {
        id: "eqBS-AC",
        title: "Acklins and Crooked Islands",
        parent: "eqBS"
    },
    { id: "eqBS-BI", title: "Bimini", parent: "eqBS" },
    { id: "eqBS-CI", title: "Cat Island", parent: "eqBS" },
    { id: "eqBS-EX", title: "Exuma", parent: "eqBS" },
    { id: "eqBS-FP", title: "Freeport", parent: "eqBS" },
    { id: "eqBS-FC", title: "Fresh Creek", parent: "eqBS" },
    {
        id: "eqBS-GH",
        title: "Governor's Harbour",
        parent: "eqBS"
    },
    { id: "eqBS-GT", title: "Green Turtle Cay", parent: "eqBS" },
    { id: "eqBS-HI", title: "Harbour Island", parent: "eqBS" },
    { id: "eqBS-HR", title: "High Rock", parent: "eqBS" },
    { id: "eqBS-IN", title: "Inagua", parent: "eqBS" },
    { id: "eqBS-KB", title: "Kemps Bay", parent: "eqBS" },
    { id: "eqBS-LI", title: "Long Island", parent: "eqBS" },
    { id: "eqBS-MH", title: "Marsh Harbour", parent: "eqBS" },
    { id: "eqBS-MG", title: "Mayaguana", parent: "eqBS" },
    { id: "eqBS-NP", title: "New Providence", parent: "eqBS" },
    {
        id: "eqBS-NB",
        title: "Nicholls Town and Berry Islands",
        parent: "eqBS"
    },
    { id: "eqBS-RI", title: "Ragged Island", parent: "eqBS" },
    { id: "eqBS-RS", title: "Rock Sound", parent: "eqBS" },
    { id: "eqBS-SP", title: "Sandy Point", parent: "eqBS" },
    {
        id: "eqBS-SR",
        title: "San Salvador and Rum Cay",
        parent: "eqBS"
    },
    { id: "eqBH", title: "Bahrain", parent: null },
    { id: "eqBH-01", title: "Al ?add", parent: "eqBH" },
    { id: "eqBH-03", title: "Al Manamah", parent: "eqBH" },
    {
        id: "eqBH-10",
        title: "Al Mintaqah al Gharbiyah",
        parent: "eqBH"
    },
    {
        id: "eqBH-07",
        title: "Al Mintaqah al Wusta",
        parent: "eqBH"
    },
    {
        id: "eqBH-05",
        title: "Al Mintaqah ash Shamaliyah",
        parent: "eqBH"
    },
    { id: "eqBH-02", title: "Al Mu?arraq", parent: "eqBH" },
    { id: "eqBH-09", title: "Ar Rifa‘", parent: "eqBH" },
    { id: "eqBH-04", title: "Jidd ?afs", parent: "eqBH" },
    { id: "eqBH-12", title: "Madinat ?amad", parent: "eqBH" },
    { id: "eqBH-08", title: "Madinat ‘Isá", parent: "eqBH" },
    {
        id: "eqBH-11",
        title: "Mintaqat Juzur ?awar",
        parent: "eqBH"
    },
    { id: "eqBH-06", title: "Sitrah", parent: "eqBH" },
    { id: "eqBD", title: "Bangladesh", parent: null },
    { id: "eqBD-1", title: "Barisal bibhag", parent: "eqBD" },
    { id: "eqBD-1B", title: "Barisal anchal", parent: "eqBD-1" },
    {
        id: "eqBD-1Q",
        title: "Patuakhali anchal",
        parent: "eqBD-1"
    },
    { id: "eqBD-2", title: "Chittagong bibhag", parent: "eqBD" },
    {
        id: "eqBD-2A",
        title: "Bandarban anchal",
        parent: "eqBD-2"
    },
    {
        id: "eqBD-2D",
        title: "Chittagong anchal",
        parent: "eqBD-2"
    },
    {
        id: "eqBD-2E",
        title: "Chittagong Hill Tracts",
        parent: "eqBD-2"
    },
    { id: "eqBD-2F", title: "Comilla anchal", parent: "eqBD-2" },
    {
        id: "eqBD-2O",
        title: "Noakhali anchal",
        parent: "eqBD-2"
    },
    { id: "eqBD-2T", title: "Sylhet anchal", parent: "eqBD-2" },
    { id: "eqBD-3", title: "Dhaka bibhag", parent: "eqBD" },
    { id: "eqBD-3G", title: "Dhaka anchal", parent: "eqBD-3" },
    {
        id: "eqBD-3I",
        title: "Faridpur anchal",
        parent: "eqBD-3"
    },
    {
        id: "eqBD-3J",
        title: "Jamalpur anchal",
        parent: "eqBD-3"
    },
    {
        id: "eqBD-3N",
        title: "Mymensingh anchal",
        parent: "eqBD-3"
    },
    { id: "eqBD-3U", title: "Tangail anchal", parent: "eqBD-3" },
    { id: "eqBD-4", title: "Khulna bibhag", parent: "eqBD" },
    { id: "eqBD-4K", title: "Jessore anchal", parent: "eqBD-4" },
    { id: "eqBD-4L", title: "Khulna anchal", parent: "eqBD-4" },
    { id: "eqBD-4M", title: "Khustia anchal", parent: "eqBD-4" },
    { id: "eqBD-5", title: "Rajshahi bibhag", parent: "eqBD" },
    { id: "eqBD-5C", title: "Bogra anchal", parent: "eqBD-5" },
    {
        id: "eqBD-5H",
        title: "Dinajpur anchal",
        parent: "eqBD-5"
    },
    { id: "eqBD-5P", title: "Pabna anchal", parent: "eqBD-5" },
    {
        id: "eqBD-5R",
        title: "Rajshahi anchal",
        parent: "eqBD-5"
    },
    { id: "eqBD-5S", title: "Rangpur anchal", parent: "eqBD-5" },
    { id: "eqBB", title: "Barbados", parent: null },
    { id: "eqBB-BB", title: "Barbados", parent: "eqBB" },
    { id: "eqBY", title: "Belarus", parent: null },
    {
        id: "eqBY-BR",
        title: "Brestskaya voblasts'",
        parent: "eqBY"
    },
    {
        id: "eqBY-HO",
        title: "Homyel'skaya voblasts’",
        parent: "eqBY"
    },
    {
        id: "eqBY-HR",
        title: "Hrodnenskaya voblasts'",
        parent: "eqBY"
    },
    {
        id: "eqBY-MA",
        title: "Mahilyowskaya voblasts'",
        parent: "eqBY"
    },
    {
        id: "eqBY-MI",
        title: "Minskaya voblasts'",
        parent: "eqBY"
    },
    {
        id: "eqBY-VI",
        title: "Vitsyebskaya voblasts'",
        parent: "eqBY"
    },
    { id: "eqBE", title: "Belgium", parent: null },
    {
        id: "eqBE-BRU",
        title:
            "Bruxelles-Capitale, Region de (fr), Brussels Hoofdstedelijk Gewest (nl)",
        parent: "eqBE"
    },
    {
        id: "eqBE-VLG",
        title: "Vlaamse Gewest (nl)",
        parent: "eqBE"
    },
    {
        id: "eqBE-VAN",
        title: "Antwerpen (nl)",
        parent: "eqBE-VLG"
    },
    {
        id: "eqBE-VLI",
        title: "Limburg (nl)",
        parent: "eqBE-VLG"
    },
    {
        id: "eqBE-VOV",
        title: "Oost-Vlaanderen (nl)",
        parent: "eqBE-VLG"
    },
    {
        id: "eqBE-VBR",
        title: "Vlaams Brabant (nl)",
        parent: "eqBE-VLG"
    },
    {
        id: "eqBE-VWV",
        title: "West-Vlaanderen (nl)",
        parent: "eqBE-VLG"
    },
    {
        id: "eqBE-WAL",
        title: "Wallonne, Region (fr)",
        parent: "eqBE"
    },
    {
        id: "eqBE-WBR",
        title: "Brabant Wallon (fr)",
        parent: "eqBE-WAL"
    },
    {
        id: "eqBE-WHT",
        title: "Hainaut (fr)",
        parent: "eqBE-WAL"
    },
    { id: "eqBE-WLG", title: "Liège (fr)", parent: "eqBE-WAL" },
    {
        id: "eqBE-WLX",
        title: "Luxembourg (fr)",
        parent: "eqBE-WAL"
    },
    { id: "eqBE-WNA", title: "Namur (fr)", parent: "eqBE-WAL" },
    { id: "eqBZ", title: "Belize", parent: null },
    { id: "eqBZ-BZ", title: "Belize", parent: "eqBZ" },
    { id: "eqBZ-CY", title: "Cayo", parent: "eqBZ" },
    { id: "eqBZ-CZL", title: "Corozal", parent: "eqBZ" },
    { id: "eqBZ-OW", title: "Orange Walk", parent: "eqBZ" },
    { id: "eqBZ-SC", title: "Stann Creek", parent: "eqBZ" },
    { id: "eqBZ-TOL", title: "Toledo", parent: "eqBZ" },
    { id: "eqBJ", title: "Benin", parent: null },
    { id: "eqBJ-AK", title: "Atakora", parent: "eqBJ" },
    { id: "eqBJ-AQ", title: "Atlantique", parent: "eqBJ" },
    { id: "eqBJ-BO", title: "Borgou", parent: "eqBJ" },
    { id: "eqBJ-MO", title: "Mono", parent: "eqBJ" },
    { id: "eqBJ-OU", title: "Ouémé", parent: "eqBJ" },
    { id: "eqBJ-ZO", title: "Zou", parent: "eqBJ" },
    { id: "eqBM", title: "Bermuda", parent: null },
    { id: "eqBM-BM", title: "Bermuda", parent: "eqBM" },
    { id: "eqBT", title: "Bhutan", parent: null },
    { id: "eqBT-33", title: "Bumthang", parent: "eqBT" },
    { id: "eqBT-12", title: "Chhukha", parent: "eqBT" },
    { id: "eqBT-22", title: "Dagana", parent: "eqBT" },
    { id: "eqBT-GA", title: "Gasa", parent: "eqBT" },
    { id: "eqBT-13", title: "Ha", parent: "eqBT" },
    { id: "eqBT-44", title: "Lhuentse", parent: "eqBT" },
    { id: "eqBT-42", title: "Monggar", parent: "eqBT" },
    { id: "eqBT-11", title: "Paro", parent: "eqBT" },
    { id: "eqBT-43", title: "Pemagatshel", parent: "eqBT" },
    { id: "eqBT-23", title: "Punakha", parent: "eqBT" },
    { id: "eqBT-45", title: "Samdrup Jongkha", parent: "eqBT" },
    { id: "eqBT-14", title: "Samtse", parent: "eqBT" },
    { id: "eqBT-31", title: "Sarpang", parent: "eqBT" },
    { id: "eqBT-15", title: "Thimphu", parent: "eqBT" },
    { id: "eqBT-41", title: "Trashigang", parent: "eqBT" },
    { id: "eqBT-TY", title: "Trashi Yangtse", parent: "eqBT" },
    { id: "eqBT-32", title: "Trongsa", parent: "eqBT" },
    { id: "eqBT-21", title: "Tsirang", parent: "eqBT" },
    { id: "eqBT-24", title: "Wangdue Phodrang", parent: "eqBT" },
    { id: "eqBT-34", title: "Zhemgang", parent: "eqBT" },
    { id: "eqBO", title: "Bolivia", parent: null },
    { id: "eqBO-C", title: "Cochabamba", parent: "eqBO" },
    { id: "eqBO-H", title: "Chuquisaca", parent: "eqBO" },
    { id: "eqBO-B", title: "El Beni", parent: "eqBO" },
    { id: "eqBO-L", title: "La Paz", parent: "eqBO" },
    { id: "eqBO-O", title: "Oruro", parent: "eqBO" },
    { id: "eqBO-N", title: "Pando", parent: "eqBO" },
    { id: "eqBO-P", title: "Potosi", parent: "eqBO" },
    { id: "eqBO-S", title: "Santa Cruz", parent: "eqBO" },
    { id: "eqBO-T", title: "Tarija", parent: "eqBO" },
    {
        id: "eqBA",
        title: "Bosnia & Herzegovina",
        parent: null
    },
    {
        id: "eqBA-BIH",
        title: "Federacija Bosna i Hercegovina",
        parent: "eqBA"
    },
    {
        id: "eqBA-SRP",
        title: "Republika Srpska",
        parent: "eqBA"
    },
    { id: "eqBW", title: "Botswana", parent: null },
    {
        id: "eqBW-CE",
        title: "Central [Serowe-Palapye]",
        parent: "eqBW"
    },
    { id: "eqBW-CH", title: "Chobe", parent: "eqBW" },
    { id: "eqBW-GH", title: "Ghanzi", parent: "eqBW" },
    { id: "eqBW-KG", title: "Kgalagadi", parent: "eqBW" },
    { id: "eqBW-KL", title: "Kgatleng", parent: "eqBW" },
    { id: "eqBW-KW", title: "Kweneng", parent: "eqBW" },
    {
        id: "eqBW-NG",
        title: "Ngamiland [North-West]",
        parent: "eqBW"
    },
    { id: "eqBW-NE", title: "North-East", parent: "eqBW" },
    { id: "eqBW-SE", title: "South-East", parent: "eqBW" },
    {
        id: "eqBW-SO",
        title: "Southern [Ngwaketse]",
        parent: "eqBW"
    },
    { id: "eqBV", title: "Bouvet Island", parent: null },
    { id: "eqBV-BV", title: "Bouvet Island", parent: "eqBV" },
    { id: "eqBR", title: "Brazil", parent: null },
    { id: "eqBR-DF", title: "Distrito Federal", parent: "eqBR" },
    { id: "eqBR-AC", title: "Acre", parent: "eqBR" },
    { id: "eqBR-AL", title: "Alagoas", parent: "eqBR" },
    { id: "eqBR-AP", title: "Amapá", parent: "eqBR" },
    { id: "eqBR-AM", title: "Amazonas", parent: "eqBR" },
    { id: "eqBR-BA", title: "Bahia", parent: "eqBR" },
    { id: "eqBR-CE", title: "Ceará", parent: "eqBR" },
    { id: "eqBR-ES", title: "Espírito Santo", parent: "eqBR" },
    { id: "eqBR-GO", title: "Goiás", parent: "eqBR" },
    { id: "eqBR-MA", title: "Maranhao", parent: "eqBR" },
    { id: "eqBR-MT", title: "Mato Grosso", parent: "eqBR" },
    {
        id: "eqBR-MS",
        title: "Mato Grosso do Sul",
        parent: "eqBR"
    },
    { id: "eqBR-MG", title: "Minas Gerais", parent: "eqBR" },
    { id: "eqBR-PA", title: "Pará", parent: "eqBR" },
    { id: "eqBR-PB", title: "Paraíba", parent: "eqBR" },
    { id: "eqBR-PR", title: "Paraná", parent: "eqBR" },
    { id: "eqBR-PE", title: "Pernambuco", parent: "eqBR" },
    { id: "eqBR-PI", title: "Piauí", parent: "eqBR" },
    { id: "eqBR-RJ", title: "Rio de Janeiro", parent: "eqBR" },
    {
        id: "eqBR-RN",
        title: "Rio Grande do Norte",
        parent: "eqBR"
    },
    {
        id: "eqBR-RS",
        title: "Rio Grande do Sul",
        parent: "eqBR"
    },
    { id: "eqBR-R0", title: "Rondônia", parent: "eqBR" },
    { id: "eqBR-RR", title: "Roraima", parent: "eqBR" },
    { id: "eqBR-SC", title: "Santa Catarina", parent: "eqBR" },
    { id: "eqBR-SP", title: "São Paulo", parent: "eqBR" },
    { id: "eqBR-SE", title: "Sergipe", parent: "eqBR" },
    { id: "eqBR-TO", title: "Tocantins", parent: "eqBR" },
    {
        id: "eqIO",
        title: "British Indian Ocean Territory",
        parent: null
    },
    {
        id: "eqIO-IO",
        title: "British Indian Ocean Territory",
        parent: "eqIO"
    },
    { id: "eqBN", title: "Brunei Darussalam", parent: null },
    { id: "eqBN-BE", title: "Belait", parent: "eqBN" },
    { id: "eqBN-BM", title: "Brunei-Muara", parent: "eqBN" },
    { id: "eqBN-TE", title: "Temburong", parent: "eqBN" },
    { id: "eqBN-TU", title: "Tutong", parent: "eqBN" },
    { id: "eqBG", title: "Bulgaria", parent: null },
    { id: "eqBG-02", title: "Burgas", parent: "eqBG" },
    { id: "eqBG-09", title: "Haskovo", parent: "eqBG" },
    { id: "eqBG-04", title: "Lovec", parent: "eqBG" },
    { id: "eqBG-05", title: "Montana", parent: "eqBG" },
    { id: "eqBG-06", title: "Plovdiv", parent: "eqBG" },
    { id: "eqBG-07", title: "Ruse", parent: "eqBG" },
    { id: "eqBG-08", title: "Sofija", parent: "eqBG" },
    { id: "eqBG-01", title: "Sofija-Grad", parent: "eqBG" },
    { id: "eqBG-03", title: "Varna", parent: "eqBG" },
    { id: "eqBF", title: "Burkina Faso", parent: null },
    { id: "eqBF-BAL", title: "Balé", parent: "eqBF" },
    { id: "eqBF-BAM", title: "Bam", parent: "eqBF" },
    { id: "eqBF-BAN", title: "Banwa", parent: "eqBF" },
    { id: "eqBF-BAZ", title: "Bazèga", parent: "eqBF" },
    { id: "eqBF-BGR", title: "Bougouriba", parent: "eqBF" },
    { id: "eqBF-BLG", title: "Boulgou", parent: "eqBF" },
    { id: "eqBF-BLK", title: "Boulkiemdé", parent: "eqBF" },
    { id: "eqBF-COM", title: "Comoé", parent: "eqBF" },
    { id: "eqBF-GAN", title: "Ganzourgou", parent: "eqBF" },
    { id: "eqBF-GNA", title: "Gnagna", parent: "eqBF" },
    { id: "eqBF-GOU", title: "Gourma", parent: "eqBF" },
    { id: "eqBF-HOU", title: "Houet", parent: "eqBF" },
    { id: "eqBF-IOB", title: "Ioba", parent: "eqBF" },
    { id: "eqBF-KAD", title: "Kadiogo", parent: "eqBF" },
    { id: "eqBF-KEN", title: "Kénédougou", parent: "eqBF" },
    { id: "eqBF-KMD", title: "Komondjari", parent: "eqBF" },
    { id: "eqBF-KMP", title: "Kompienga", parent: "eqBF" },
    { id: "eqBF-KOS", title: "Kossi", parent: "eqBF" },
    { id: "eqBF-KOP", title: "Koulpélogo", parent: "eqBF" },
    { id: "eqBF-KOT", title: "Kouritenga", parent: "eqBF" },
    { id: "eqBF-KOW", title: "Kourwéogo", parent: "eqBF" },
    { id: "eqBF-LER", title: "Léraba", parent: "eqBF" },
    { id: "eqBF-LOR", title: "Loroum", parent: "eqBF" },
    { id: "eqBF-MOU", title: "Mouhoun", parent: "eqBF" },
    { id: "eqBF-NAO", title: "Nahouri", parent: "eqBF" },
    { id: "eqBF-NAM", title: "Namentenga", parent: "eqBF" },
    { id: "eqBF-NAY", title: "Nayala", parent: "eqBF" },
    { id: "eqBF-NOU", title: "Noumbiel", parent: "eqBF" },
    { id: "eqBF-OUB", title: "Oubritenga", parent: "eqBF" },
    { id: "eqBF-OUD", title: "Oudalan", parent: "eqBF" },
    { id: "eqBF-PAS", title: "Passoré", parent: "eqBF" },
    { id: "eqBF-PON", title: "Poni", parent: "eqBF" },
    { id: "eqBF-SNG", title: "Sanguié", parent: "eqBF" },
    { id: "eqBF-SMT", title: "Sanmatenga", parent: "eqBF" },
    { id: "eqBF-SEN", title: "Séno", parent: "eqBF" },
    { id: "eqBF-SIS", title: "Sissili", parent: "eqBF" },
    { id: "eqBF-SOM", title: "Soum", parent: "eqBF" },
    { id: "eqBF-SOR", title: "Sourou", parent: "eqBF" },
    { id: "eqBF-TAP", title: "Tapoa", parent: "eqBF" },
    { id: "eqBF-TUI", title: "Tui", parent: "eqBF" },
    { id: "eqBF-YAG", title: "Yagha", parent: "eqBF" },
    { id: "eqBF-YAT", title: "Yatenga", parent: "eqBF" },
    { id: "eqBF-ZIR", title: "Ziro", parent: "eqBF" },
    { id: "eqBF-ZON", title: "Zondoma", parent: "eqBF" },
    { id: "eqBF-ZOU", title: "Zoundwéogo", parent: "eqBF" },
    { id: "eqBI", title: "Burundi", parent: null },
    { id: "eqBI-BB", title: "Bubanza", parent: "eqBI" },
    { id: "eqBI-BJ", title: "Bujumbura", parent: "eqBI" },
    { id: "eqBI-BR", title: "Bururi", parent: "eqBI" },
    { id: "eqBI-CA", title: "Cankuzo", parent: "eqBI" },
    { id: "eqBI-CI", title: "Cibitoke", parent: "eqBI" },
    { id: "eqBI-GI", title: "Gitega", parent: "eqBI" },
    { id: "eqBI-KR", title: "Karuzi", parent: "eqBI" },
    { id: "eqBI-KY", title: "Kayanza", parent: "eqBI" },
    { id: "eqBI-KI", title: "Kirundo", parent: "eqBI" },
    { id: "eqBI-MA", title: "Makamba", parent: "eqBI" },
    { id: "eqBI-MU", title: "Muramvya", parent: "eqBI" },
    { id: "eqBI-MY", title: "Muyinga", parent: "eqBI" },
    { id: "eqBI-NG", title: "Ngozi", parent: "eqBI" },
    { id: "eqBI-RT", title: "Rutana", parent: "eqBI" },
    { id: "eqBI-RY", title: "Ruyigi", parent: "eqBI" },
    { id: "eqKH", title: "Cambodia", parent: null },
    {
        id: "eqKH-23",
        title: "Krong Kaeb [Krong Kêb]",
        parent: "eqKH"
    },
    {
        id: "eqKH-18",
        title: "Krong Preah Sihanouk [Krong Preah Sihanouk]",
        parent: "eqKH"
    },
    {
        id: "eqKH-12",
        title: "Phnom Penh [Phnum Pénh]",
        parent: "eqKH"
    },
    {
        id: "eqKH-2",
        title: "Baat Dambang [Batdâmbâng]",
        parent: "eqKH"
    },
    {
        id: "eqKH-1",
        title: "Banteay Mean Chey [Bântéay Méanchey]",
        parent: "eqKH"
    },
    {
        id: "eqKH-3",
        title: "Kampong Chaam [Kâmpóng Cham]",
        parent: "eqKH"
    },
    {
        id: "eqKH-4",
        title: "Kampong Chhnang [Kâmpóng Chhnang]",
        parent: "eqKH"
    },
    {
        id: "eqKH-5",
        title: "Kampong Spueu [Kâmpóng Spœ]",
        parent: "eqKH"
    },
    {
        id: "eqKH-6",
        title: "Kampong Thum [Kâmpóng Thum]",
        parent: "eqKH"
    },
    { id: "eqKH-7", title: "Kampot [Kâmpôt]", parent: "eqKH" },
    { id: "eqKH-8", title: "Kandaal [Kândal]", parent: "eqKH" },
    {
        id: "eqKH-10",
        title: "Kracheh [Krâchéh]",
        parent: "eqKH"
    },
    {
        id: "eqKH-11",
        title: "Mond01 Kiri [Môndól Kiri]",
        parent: "eqKH"
    },
    {
        id: "eqKH-22",
        title: "Otdar Mean Chey [Otdâr Méanchey]",
        parent: "eqKH"
    },
    {
        id: "eqKH-15",
        title: "Pousaat [Pouthisat]",
        parent: "eqKH"
    },
    {
        id: "eqKH-13",
        title: "Preah Vihear [Preah Vihéar]",
        parent: "eqKH"
    },
    {
        id: "eqKH-14",
        title: "Prey Veaeng [Prey Vêng]",
        parent: "eqKH"
    },
    {
        id: "eqKH-16",
        title: "Rotanak Kiri [Rôtânôkiri]",
        parent: "eqKH"
    },
    {
        id: "eqKH-17",
        title: "Siem Reab [Siemréab]",
        parent: "eqKH"
    },
    {
        id: "eqKH-19",
        title: "Stueng Traeng [Stœng Trêng]",
        parent: "eqKH"
    },
    {
        id: "eqKH-20",
        title: "Svaay Rieng [Svay Rieng]",
        parent: "eqKH"
    },
    { id: "eqKH-21", title: "Taakaev [Takêv]", parent: "eqKH" },
    { id: "eqCM", title: "Cameroon", parent: null },
    { id: "eqCM-AD", title: "Adamaoua", parent: "eqCM" },
    { id: "eqCM-CE", title: "Centre", parent: "eqCM" },
    { id: "eqCM-ES", title: "Est", parent: "eqCM" },
    { id: "eqCM-EN", title: "Far North", parent: "eqCM" },
    { id: "eqCM-LT", title: "Littoral", parent: "eqCM" },
    { id: "eqCM-NO", title: "North", parent: "eqCM" },
    { id: "eqCM-NW", title: "North-West", parent: "eqCM" },
    { id: "eqCM-SU", title: "South", parent: "eqCM" },
    { id: "eqCM-SW", title: "South-West", parent: "eqCM" },
    { id: "eqCM-OU", title: "West", parent: "eqCM" },
    { id: "eqCA", title: "Canada", parent: null },
    { id: "eqCA-AB", title: "Alberta", parent: "eqCA" },
    {
        id: "eqCA-BC",
        title: "British Columbia (Colombie-Britannique)",
        parent: "eqCA"
    },
    { id: "eqCA-MB", title: "Manitoba", parent: "eqCA" },
    {
        id: "eqCA-NB",
        title: "New Brunswick (Nouveau-Brunswick)",
        parent: "eqCA"
    },
    {
        id: "eqCA-NF",
        title: "Newfoundland (Terre-Neuve)",
        parent: "eqCA"
    },
    {
        id: "eqCA-NS",
        title: "Nova Scotia (Nouvelle-Écosse)",
        parent: "eqCA"
    },
    { id: "eqCA-ON", title: "Ontario", parent: "eqCA" },
    {
        id: "eqCA-PE",
        title: "Printe Edward Island (Île-du-Prince-Édouard)",
        parent: "eqCA"
    },
    { id: "eqCA-QC", title: "Quebec (Québec)", parent: "eqCA" },
    { id: "eqCA-SK", title: "Saskatchewan", parent: "eqCA" },
    {
        id: "eqCA-NT",
        title: "Northwest Territories (Territoires du Nord-Ouest)",
        parent: "eqCA"
    },
    {
        id: "eqCA-YT",
        title: "Yukon Territory (Teritoire du Yukon)",
        parent: "eqCA"
    },
    { id: "eqCV", title: "Cape Verde", parent: null },
    {
        id: "eqCV-B",
        title: "Ilhas de Barlavento",
        parent: "eqCV"
    },
    { id: "eqCV-BV", title: "Boa Vista", parent: "eqCV-B" },
    { id: "eqCV-PA", title: "Paul", parent: "eqCV-B" },
    { id: "eqCV-PN", title: "Porto Novo", parent: "eqCV-B" },
    { id: "eqCV-RG", title: "Ribeira Grande", parent: "eqCV-B" },
    { id: "eqCV-SL", title: "Sal", parent: "eqCV-B" },
    { id: "eqCV-SN", title: "Sao Nicolau", parent: "eqCV-B" },
    { id: "eqCV-SV", title: "Sao Vicente", parent: "eqCV-B" },
    {
        id: "eqCV-S",
        title: "Ilhas de Sotavento",
        parent: "eqCV"
    },
    { id: "eqCV-BR", title: "Brava", parent: "eqCV-S" },
    { id: "eqCV-FO", title: "Fogo", parent: "eqCV-S" },
    { id: "eqCV-MA", title: "Maio", parent: "eqCV-S" },
    { id: "eqCV-PR", title: "Praia", parent: "eqCV-S" },
    { id: "eqCV-CA", title: "Santa Catarina", parent: "eqCV-S" },
    { id: "eqCV-CR", title: "Santa Cruz", parent: "eqCV-S" },
    { id: "eqCV-TA", title: "Tarrafal", parent: "eqCV-S" },
    { id: "eqKY", title: "Cayman Islands", parent: null },
    { id: "eqKY-KY", title: "Cayman Islands", parent: "eqKY" },
    {
        id: "eqCF",
        title: "Central African Republic",
        parent: null
    },
    { id: "eqCF-BGF", title: "Bangui", parent: "eqCF" },
    {
        id: "eqCF-BB",
        title: "Bamingui-Bangoran",
        parent: "eqCF"
    },
    { id: "eqCF-BK", title: "Basse-Kotto", parent: "eqCF" },
    { id: "eqCF-HK", title: "Haute-Kotto", parent: "eqCF" },
    { id: "eqCF-HM", title: "Haut-Mbomou", parent: "eqCF" },
    { id: "eqCF-KG", title: "Kémo", parent: "eqCF" },
    { id: "eqCF-LB", title: "Lobaye", parent: "eqCF" },
    { id: "eqCF-HS", title: "Mambéré-Kadéï", parent: "eqCF" },
    { id: "eqCF-MB", title: "Mbomou", parent: "eqCF" },
    { id: "eqCF-KB", title: "Nana-Grébizi", parent: "eqCF" },
    { id: "eqCF-NM", title: "Nana-Mambéré", parent: "eqCF" },
    { id: "eqCF-MP", title: "Ombella-Mpoko", parent: "eqCF" },
    { id: "eqCF-UK", title: "Ouaka", parent: "eqCF" },
    { id: "eqCF-AC", title: "Ouham", parent: "eqCF" },
    { id: "eqCF-OP", title: "Ouham-Pendé", parent: "eqCF" },
    { id: "eqCF-SE", title: "Sangha-Mbaéré", parent: "eqCF" },
    { id: "eqCF-VK", title: "Vakaga", parent: "eqCF" },
    { id: "eqTD", title: "Chad", parent: null },
    { id: "eqTD-BA", title: "Batha", parent: "eqTD" },
    { id: "eqTD-BI", title: "Biltine", parent: "eqTD" },
    {
        id: "eqTD-BET",
        title: "Borkou-Ennedi-Tibesti",
        parent: "eqTD"
    },
    { id: "eqTD-CB", title: "Chari-Baguirmi", parent: "eqTD" },
    { id: "eqTD-GR", title: "Guéra", parent: "eqTD" },
    { id: "eqTD-KA", title: "Kanem", parent: "eqTD" },
    { id: "eqTD-LC", title: "Lac", parent: "eqTD" },
    {
        id: "eqTD-LO",
        title: "Logone-Occidental",
        parent: "eqTD"
    },
    { id: "eqTD-LR", title: "Logone-Oriental", parent: "eqTD" },
    { id: "eqTD-MK", title: "Mayo-Kébbi", parent: "eqTD" },
    { id: "eqTD-MC", title: "Moyen-Chari", parent: "eqTD" },
    { id: "eqTD-OD", title: "Ouaddaï", parent: "eqTD" },
    { id: "eqTD-SA", title: "Salamat", parent: "eqTD" },
    { id: "eqTD-TA", title: "Tandjilé", parent: "eqTD" },
    { id: "eqCL", title: "Chile", parent: null },
    {
        id: "eqCL-AI",
        title: "Aisén del General Carlos Ibáñiez del Campo",
        parent: "eqCL"
    },
    { id: "eqCL-AN", title: "Antofagasta", parent: "eqCL" },
    { id: "eqCL-AR", title: "Araucanía", parent: "eqCL" },
    { id: "eqCL-AT", title: "Atacama", parent: "eqCL" },
    { id: "eqCL-BI", title: "Bío-Bío", parent: "eqCL" },
    { id: "eqCL-CO", title: "Coquimbo", parent: "eqCL" },
    {
        id: "eqCL-LI",
        title: "Libertador General Bernardo O'Higgins",
        parent: "eqCL"
    },
    { id: "eqCL-LL", title: "Los Lagos", parent: "eqCL" },
    { id: "eqCL-MA", title: "Magallanes", parent: "eqCL" },
    { id: "eqCL-ML", title: "Maule", parent: "eqCL" },
    {
        id: "eqCL-RM",
        title: "Regíon Metropolitana de Santiago",
        parent: "eqCL"
    },
    { id: "eqCL-TA", title: "Tarapacá", parent: "eqCL" },
    { id: "eqCL-VS", title: "Valparaiso", parent: "eqCL" },
    { id: "eqCN", title: "China", parent: null },
    { id: "eqCN-11", title: "Beijing", parent: "eqCN" },
    { id: "eqCN-50", title: "Chongqing", parent: "eqCN" },
    { id: "eqCN-31", title: "Shanghai", parent: "eqCN" },
    { id: "eqCN-12", title: "Tianjin", parent: "eqCN" },
    { id: "eqCN-34", title: "Anhui", parent: "eqCN" },
    { id: "eqCN-35", title: "Fujian", parent: "eqCN" },
    { id: "eqCN-62", title: "Gansu", parent: "eqCN" },
    { id: "eqCN-44", title: "Guangdong", parent: "eqCN" },
    { id: "eqCN-52", title: "Guizhou", parent: "eqCN" },
    { id: "eqCN-46", title: "Hainan", parent: "eqCN" },
    { id: "eqCN-13", title: "Hebei", parent: "eqCN" },
    { id: "eqCN-23", title: "Heilongjiang", parent: "eqCN" },
    { id: "eqCN-41", title: "Henan", parent: "eqCN" },
    { id: "eqCN-42", title: "Hubei", parent: "eqCN" },
    { id: "eqCN-43", title: "Hunan", parent: "eqCN" },
    { id: "eqCN-32", title: "Jiangsu", parent: "eqCN" },
    { id: "eqCN-36", title: "Jiangxi", parent: "eqCN" },
    { id: "eqCN-22", title: "Jilin", parent: "eqCN" },
    { id: "eqCN-21", title: "Liaoning", parent: "eqCN" },
    { id: "eqCN-63", title: "Qinghai", parent: "eqCN" },
    { id: "eqCN-61", title: "Shaanxi", parent: "eqCN" },
    { id: "eqCN-37", title: "Shandong", parent: "eqCN" },
    { id: "eqCN-14", title: "Shanxi", parent: "eqCN" },
    { id: "eqCN-51", title: "Sichuan", parent: "eqCN" },
    { id: "eqCN-71", title: "Taiwan", parent: "eqCN" },
    { id: "eqCN-53", title: "Yunnan", parent: "eqCN" },
    { id: "eqCN-33", title: "Zhejiang", parent: "eqCN" },
    { id: "eqCN-45", title: "Guangxi", parent: "eqCN" },
    { id: "eqCN-15", title: "Nei Monggol", parent: "eqCN" },
    { id: "eqCN-64", title: "Ningxia", parent: "eqCN" },
    { id: "eqCN-65", title: "Xinjiang", parent: "eqCN" },
    { id: "eqCN-54", title: "Xizang", parent: "eqCN" },
    { id: "eqCN-91", title: "Hong Kong", parent: "eqCN" },
    { id: "eqCX", title: "Christmas Island", parent: null },
    { id: "eqCX-CX", title: "Christmas Island", parent: "eqCX" },
    {
        id: "eqCC",
        title: "Cocos (Keeling) Islands",
        parent: null
    },
    {
        id: "eqCC-CC",
        title: "Cocos (Keeling) Islands",
        parent: "eqCC"
    },
    { id: "eqCO", title: "Colombia", parent: null },
    {
        id: "eqCO-DC",
        title: "Distrito Capital de Santa Fe de Bogota",
        parent: "eqCO"
    },
    { id: "eqCO-AMA", title: "Amazonas", parent: "eqCO" },
    { id: "eqCO-ANT", title: "Antioguia", parent: "eqCO" },
    { id: "eqCO-ARA", title: "Arauca", parent: "eqCO" },
    { id: "eqCO-ATL", title: "Atlántico", parent: "eqCO" },
    { id: "eqCO-BOL", title: "Bolívar", parent: "eqCO" },
    { id: "eqCO-BOY", title: "Boyacá", parent: "eqCO" },
    { id: "eqCO-CAL", title: "Caldas", parent: "eqCO" },
    { id: "eqCO-CAQ", title: "Caquetá", parent: "eqCO" },
    { id: "eqCO-CAS", title: "Casanare", parent: "eqCO" },
    { id: "eqCO-CAU", title: "Cauca", parent: "eqCO" },
    { id: "eqCO-CES", title: "Cesar", parent: "eqCO" },
    { id: "eqCO-COR", title: "Córdoba", parent: "eqCO" },
    { id: "eqCO-CUN", title: "Cundinamarca", parent: "eqCO" },
    { id: "eqCO-CHO", title: "Chocó", parent: "eqCO" },
    { id: "eqCO-GUA", title: "Guainía", parent: "eqCO" },
    { id: "eqCO-GUV", title: "Guaviare", parent: "eqCO" },
    { id: "eqCO-HUI", title: "Huila", parent: "eqCO" },
    { id: "eqCO-LAG", title: "La Guajira", parent: "eqCO" },
    { id: "eqCO-MAG", title: "Magdalena", parent: "eqCO" },
    { id: "eqCO-MET", title: "Meta", parent: "eqCO" },
    { id: "eqCO-NAR", title: "Nariño", parent: "eqCO" },
    {
        id: "eqCO-NSA",
        title: "Norte de Santander",
        parent: "eqCO"
    },
    { id: "eqCO-PUT", title: "Putumayo", parent: "eqCO" },
    { id: "eqCO-QUI", title: "Quindío", parent: "eqCO" },
    { id: "eqCO-RIS", title: "Risaralda", parent: "eqCO" },
    {
        id: "eqCO-SAP",
        title: "San Andrés, Providencia y Santa Catalina",
        parent: "eqCO"
    },
    { id: "eqCO-SAN", title: "Santander", parent: "eqCO" },
    { id: "eqCO-SUC", title: "Sucre", parent: "eqCO" },
    { id: "eqCO-TOL", title: "Tolima", parent: "eqCO" },
    { id: "eqCO-VAC", title: "Valle del Cauca", parent: "eqCO" },
    { id: "eqCO-VAU", title: "Vaupés", parent: "eqCO" },
    { id: "eqCO-VID", title: "Vichada", parent: "eqCO" },
    { id: "eqKM", title: "Comoros", parent: null },
    {
        id: "eqKM-A",
        title: "Anjouan (Ndzouani)",
        parent: "eqKM"
    },
    {
        id: "eqKM-G",
        title: "Grande Comore (Ngazidja)",
        parent: "eqKM"
    },
    { id: "eqKM-M", title: "Mohéli (Moili)", parent: "eqKM" },
    { id: "eqCG", title: "Congo", parent: null },
    { id: "eqCG-BZV", title: "Brazzaville", parent: "eqCG" },
    { id: "eqCG-11", title: "Bouenza", parent: "eqCG" },
    { id: "eqCG-8", title: "Cuvette", parent: "eqCG" },
    { id: "eqCG-15", title: "Cuvette-Ouest", parent: "eqCG" },
    { id: "eqCG-5", title: "Kouilou", parent: "eqCG" },
    { id: "eqCG-2", title: "Lékoumou", parent: "eqCG" },
    { id: "eqCG-7", title: "Likouala", parent: "eqCG" },
    { id: "eqCG-9", title: "Niari", parent: "eqCG" },
    { id: "eqCG-14", title: "Plateaux", parent: "eqCG" },
    { id: "eqCG-12", title: "Pool", parent: "eqCG" },
    { id: "eqCG-13", title: "Sangha", parent: "eqCG" },
    { id: "eqCK", title: "Cook Islands", parent: null },
    { id: "eqCK-CK", title: "Cook Islands", parent: "eqCK" },
    { id: "eqCR", title: "Costa Rica", parent: null },
    { id: "eqCR-A", title: "Alajuela", parent: "eqCR" },
    { id: "eqCR-C", title: "Cartago", parent: "eqCR" },
    { id: "eqCR-G", title: "Guanacaste", parent: "eqCR" },
    { id: "eqCR-H", title: "Heredia", parent: "eqCR" },
    { id: "eqCR-L", title: "Limón", parent: "eqCR" },
    { id: "eqCR-P", title: "Puntarenas", parent: "eqCR" },
    { id: "eqCR-SJ", title: "San José", parent: "eqCR" },
    {
        id: "eqCI",
        title: "Cote D'ivoire (Ivory Coast)",
        parent: null
    },
    {
        id: "eqCI-06",
        title: "18 Montagnes (Région des)",
        parent: "eqCI"
    },
    {
        id: "eqCI-16",
        title: "Agnébi (Région de l')",
        parent: "eqCI"
    },
    {
        id: "eqCI-09",
        title: "Bas-Sassandra (Région du)",
        parent: "eqCI"
    },
    {
        id: "eqCI-10",
        title: "Denguélé (Région du)",
        parent: "eqCI"
    },
    {
        id: "eqCI-02",
        title: "Haut-Sassandra (Région du)",
        parent: "eqCI"
    },
    {
        id: "eqCI-07",
        title: "Lacs (Région des)",
        parent: "eqCI"
    },
    {
        id: "eqCI-01",
        title: "Lagunes (Région des)",
        parent: "eqCI"
    },
    {
        id: "eqCI-12",
        title: "Marahoué (Région de la)",
        parent: "eqCI"
    },
    {
        id: "eqCI-05",
        title: "Moyen-Comoé (Région du)",
        parent: "eqCI"
    },
    {
        id: "eqCI-11",
        title: "Nzi-Comoé (Région)",
        parent: "eqCI"
    },
    {
        id: "eqCI-03",
        title: "Savanes (Région des)",
        parent: "eqCI"
    },
    {
        id: "eqCI-15",
        title: "Sud-Bandama (Région du)",
        parent: "eqCI"
    },
    {
        id: "eqCI-13",
        title: "Sud-Comoé (Région du)",
        parent: "eqCI"
    },
    {
        id: "eqCI-04",
        title: "Vallée du Bandama (Région de la)",
        parent: "eqCI"
    },
    {
        id: "eqCI-14",
        title: "Worodougou (Région du)",
        parent: "eqCI"
    },
    {
        id: "eqCI-08",
        title: "Zanzan (Région du)",
        parent: "eqCI"
    },
    { id: "eqHR", title: "Croatia (Hrvatska)", parent: null },
    {
        id: "eqHR-07",
        title: "Bjelovarsko-bilogorska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-12",
        title: "Brodsko-posavska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-19",
        title: "Dubrovacko-neretvanska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-18",
        title: "Istarska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-04",
        title: "Karlovacka županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-06",
        title: "Koprivnickco-križevacka županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-02",
        title: "Krapinsko-zagorska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-09",
        title: "Licko-senjska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-20",
        title: "Medjimurska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-14",
        title: "Osjecko-baranjska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-11",
        title: "Požeško-slavonska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-08",
        title: "Primorsko-goranska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-03",
        title: "Sisaško-moslavacka županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-17",
        title: "Splitsko-dalmatinska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-15",
        title: "Šibensko-kninska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-05",
        title: "Varaždinska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-10",
        title: "Viroviticko-podravska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-16",
        title: "Vukovarsko-srijemska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-13",
        title: "Zadarska županija",
        parent: "eqHR"
    },
    {
        id: "eqHR-01",
        title: "Zagrebacka županija",
        parent: "eqHR"
    },
    { id: "eqCU", title: "Cuba", parent: null },
    { id: "eqCU-09", title: "Camagüey", parent: "eqCU" },
    {
        id: "eqCU-03",
        title: "Ciudad de La Habana",
        parent: "eqCU"
    },
    { id: "eqCU-12", title: "Granma", parent: "eqCU" },
    { id: "eqCU-14", title: "Guantánamo", parent: "eqCU" },
    { id: "eqCU-11", title: "Holguín", parent: "eqCU" },
    { id: "eqCU-02", title: "La Habana", parent: "eqCU" },
    { id: "eqCU-10", title: "Las Tunas", parent: "eqCU" },
    { id: "eqCU-04", title: "Matanzas", parent: "eqCU" },
    { id: "eqCU-01", title: "Pinar del Río", parent: "eqCU" },
    { id: "eqCU-07", title: "Sancti Spíritus", parent: "eqCU" },
    { id: "eqCU-13", title: "Santiago de Cuba", parent: "eqCU" },
    { id: "eqCU-05", title: "Villa Clara", parent: "eqCU" },
    {
        id: "eqCU-99",
        title: "Isla de la Juventud",
        parent: "eqCU"
    },
    { id: "eqCY", title: "Cyprus", parent: null },
    {
        id: "eqCY-04",
        title: "Ammochostos (Magusa)",
        parent: "eqCY"
    },
    { id: "eqCY-06", title: "Keryneia (Girne)", parent: "eqCY" },
    { id: "eqCY-03", title: "Larnaka", parent: "eqCY" },
    {
        id: "eqCY-01",
        title: "Lefkosia (Lefkosa)",
        parent: "eqCY"
    },
    {
        id: "eqCY-02",
        title: "Lemesos (Leymosun)",
        parent: "eqCY"
    },
    { id: "eqCY-05", title: "Pafos (Baf)", parent: "eqCY" },
    { id: "eqCZ", title: "Czech Republic", parent: null },
    { id: "eqCZ-PRG", title: "Praha", parent: "eqCZ" },
    { id: "eqCZ-CJC", title: "Jihoceský kraj", parent: "eqCZ" },
    {
        id: "eqCZ-CJM",
        title: "Jihomoravský kraj",
        parent: "eqCZ"
    },
    {
        id: "eqCZ-CSC",
        title: "Severoceský kraj",
        parent: "eqCZ"
    },
    {
        id: "eqCZ-CSM",
        title: "Severomoravský kraj",
        parent: "eqCZ"
    },
    {
        id: "eqCZ-CST",
        title: "Stredoceský kraj",
        parent: "eqCZ"
    },
    {
        id: "eqCZ-CVC",
        title: "Východoceský kraj",
        parent: "eqCZ"
    },
    {
        id: "eqCZ-CZC",
        title: "Západoceský kraj",
        parent: "eqCZ"
    },
    { id: "eqDK", title: "Denmark", parent: null },
    { id: "eqDK-147", title: "Frederiksberg", parent: "eqDK" },
    { id: "eqDK-101", title: "K?benhavn", parent: "eqDK" },
    { id: "eqDK-040", title: "Bornholm", parent: "eqDK" },
    { id: "eqDK-020", title: "Frederiksborg", parent: "eqDK" },
    { id: "eqDK-042", title: "Fyn", parent: "eqDK" },
    { id: "eqDK-015", title: "K?benhavn", parent: "eqDK" },
    { id: "eqDK-080", title: "Nordjylland", parent: "eqDK" },
    { id: "eqDK-055", title: "Ribe", parent: "eqDK" },
    { id: "eqDK-065", title: "Ringk?bing", parent: "eqDK" },
    { id: "eqDK-025", title: "Roskilde", parent: "eqDK" },
    { id: "eqDK-035", title: "Storstr?m", parent: "eqDK" },
    { id: "eqDK-050", title: "S?nderjylland", parent: "eqDK" },
    { id: "eqDK-060", title: "Vejle", parent: "eqDK" },
    { id: "eqDK-030", title: "Vestsjælland", parent: "eqDK" },
    { id: "eqDK-076", title: "Viborg", parent: "eqDK" },
    { id: "eqDK-070", title: "Århus", parent: "eqDK" },
    { id: "eqDJ", title: "Djibouti", parent: null },
    { id: "eqDJ-AS", title: "Ali Sabieh", parent: "eqDJ" },
    { id: "eqDJ-DI", title: "Dikhil", parent: "eqDJ" },
    { id: "eqDJ-DJ", title: "Djibouti", parent: "eqDJ" },
    { id: "eqDJ-OB", title: "Obock", parent: "eqDJ" },
    { id: "eqDJ-TA", title: "Tadjoura", parent: "eqDJ" },
    { id: "eqDM", title: "Dominica", parent: null },
    { id: "eqDM-DM", title: "Dominica", parent: "eqDM" },
    { id: "eqDO", title: "Dominican Republic", parent: null },
    {
        id: "eqDO-DN",
        title: "Distrito National (Santo Domingo)",
        parent: "eqDO"
    },
    { id: "eqDO-AZ", title: "Azua", parent: "eqDO" },
    { id: "eqDO-BR", title: "Bahoruco", parent: "eqDO" },
    { id: "eqDO-BH", title: "Barahona", parent: "eqDO" },
    { id: "eqDO-DA", title: "Dajabón", parent: "eqDO" },
    { id: "eqDO-DU", title: "Duarte", parent: "eqDO" },
    { id: "eqDO-SE", title: "El Seibo", parent: "eqDO" },
    {
        id: "eqDO-EP",
        title: "La Estrelleta [Elías Piña]",
        parent: "eqDO"
    },
    { id: "eqDO-HM", title: "Hato Mayor", parent: "eqDO" },
    { id: "eqDO-IN", title: "Independencia", parent: "eqDO" },
    { id: "eqDO-AL", title: "La Altagracia", parent: "eqDO" },
    { id: "eqDO-RO", title: "La Romana", parent: "eqDO" },
    { id: "eqDO-VE", title: "La Vega", parent: "eqDO" },
    {
        id: "eqDO-MT",
        title: "María Trinidad Sánchez",
        parent: "eqDO"
    },
    { id: "eqDO-MN", title: "Monseñor Nouel", parent: "eqDO" },
    { id: "eqDO-MC", title: "Monte Cristi", parent: "eqDO" },
    { id: "eqDO-MP", title: "Monte Plata", parent: "eqDO" },
    { id: "eqDO-PN", title: "Pedernales", parent: "eqDO" },
    { id: "eqDO-PR", title: "Peravia", parent: "eqDO" },
    { id: "eqDO-PP", title: "Puerto Plata", parent: "eqDO" },
    { id: "eqDO-SC", title: "Salcedo", parent: "eqDO" },
    { id: "eqDO-SM", title: "Samaná", parent: "eqDO" },
    { id: "eqDO-SZ", title: "Sanchez Ramírez", parent: "eqDO" },
    { id: "eqDO-CR", title: "San Cristóbal", parent: "eqDO" },
    { id: "eqDO-JU", title: "San Juan", parent: "eqDO" },
    {
        id: "eqDO-PM",
        title: "San Pedro de Macorís",
        parent: "eqDO"
    },
    { id: "eqDO-ST", title: "Santiago", parent: "eqDO" },
    {
        id: "eqDO-SR",
        title: "Santiago Rodríguez",
        parent: "eqDO"
    },
    { id: "eqDO-VA", title: "Valverde", parent: "eqDO" },
    { id: "eqTP", title: "East Timor", parent: null },
    { id: "eqTP-TP", title: "East Timor", parent: "eqTP" },
    { id: "eqEC", title: "Ecuador", parent: null },
    { id: "eqEC-A", title: "Azuay", parent: "eqEC" },
    { id: "eqEC-B", title: "Bolívar", parent: "eqEC" },
    { id: "eqEC-F", title: "Cañar", parent: "eqEC" },
    { id: "eqEC-C", title: "Carchi", parent: "eqEC" },
    { id: "eqEC-X", title: "Cotopaxi", parent: "eqEC" },
    { id: "eqEC-H", title: "Chimborazo", parent: "eqEC" },
    { id: "eqEC-O", title: "El Oro", parent: "eqEC" },
    { id: "eqEC-E", title: "Esmeraldas", parent: "eqEC" },
    { id: "eqEC-W", title: "Galápagos", parent: "eqEC" },
    { id: "eqEC-G", title: "Guayas", parent: "eqEC" },
    { id: "eqEC-I", title: "Imbabura", parent: "eqEC" },
    { id: "eqEC-L", title: "Loja", parent: "eqEC" },
    { id: "eqEC-R", title: "Los Ríos", parent: "eqEC" },
    { id: "eqEC-M", title: "Manabí", parent: "eqEC" },
    { id: "eqEC-S", title: "Morona-Santiago", parent: "eqEC" },
    { id: "eqEC-N", title: "Napo", parent: "eqEC" },
    { id: "eqEC-Y", title: "Pastaza", parent: "eqEC" },
    { id: "eqEC-P", title: "Pichincha", parent: "eqEC" },
    { id: "eqEC-U", title: "Sucumbíos", parent: "eqEC" },
    { id: "eqEC-T", title: "Tungurahua", parent: "eqEC" },
    { id: "eqEC-Z", title: "Zarnora-Chinchipe", parent: "eqEC" },
    { id: "eqEG", title: "Egypt", parent: null },
    { id: "eqEG-DK", title: "Ad Daqahliyah", parent: "eqEG" },
    { id: "eqEG-BA", title: "Al Ba?r al A?mar", parent: "eqEG" },
    { id: "eqEG-BH", title: "Al Bu?ayrah", parent: "eqEG" },
    { id: "eqEG-FYM", title: "Al Fayyum", parent: "eqEG" },
    { id: "eqEG-GH", title: "Al Gharbiyah", parent: "eqEG" },
    { id: "eqEG-ALX", title: "Al Iskandariyah", parent: "eqEG" },
    { id: "eqEG-IS", title: "Al Isma‘iliyah", parent: "eqEG" },
    { id: "eqEG-GZ", title: "Al Jizah", parent: "eqEG" },
    { id: "eqEG-MNF", title: "Al Minufiyah", parent: "eqEG" },
    { id: "eqEG-MN", title: "Al Minya", parent: "eqEG" },
    { id: "eqEG-C", title: "Al Qahirah", parent: "eqEG" },
    { id: "eqEG-KB", title: "Al Qalyubiyah", parent: "eqEG" },
    {
        id: "eqEG-WAD",
        title: "Al Wadi al Jadid",
        parent: "eqEG"
    },
    { id: "eqEG-SHR", title: "Ash Sharqiyah", parent: "eqEG" },
    { id: "eqEG-SUZ", title: "As Suways", parent: "eqEG" },
    { id: "eqEG-ASN", title: "Aswan", parent: "eqEG" },
    { id: "eqEG-AST", title: "Asyut", parent: "eqEG" },
    { id: "eqEG-BNS", title: "Bani Suwayf", parent: "eqEG" },
    { id: "eqEG-PTS", title: "Bur Sa‘id", parent: "eqEG" },
    { id: "eqEG-DT", title: "Dumyat", parent: "eqEG" },
    { id: "eqEG-JS", title: "Janub Sina'", parent: "eqEG" },
    { id: "eqEG-KFS", title: "Kafr ash Shaykh", parent: "eqEG" },
    { id: "eqEG-MT", title: "Matru?", parent: "eqEG" },
    { id: "eqEG-KN", title: "Qina", parent: "eqEG" },
    { id: "eqEG-SIN", title: "Shamal Sina'", parent: "eqEG" },
    { id: "eqEG-SHG", title: "Suhaj", parent: "eqEG" },
    { id: "eqSV", title: "El Salvador", parent: null },
    { id: "eqSV-AH", title: "Ahuachapán", parent: "eqSV" },
    { id: "eqSV-CA", title: "Cabañas", parent: "eqSV" },
    { id: "eqSV-CU", title: "Cuscatlán", parent: "eqSV" },
    { id: "eqSV-CH", title: "Chalatenango", parent: "eqSV" },
    { id: "eqSV-LI", title: "La Libertad", parent: "eqSV" },
    { id: "eqSV-PA", title: "La Paz", parent: "eqSV" },
    { id: "eqSV-UN", title: "La Unión", parent: "eqSV" },
    { id: "eqSV-MO", title: "Morazán", parent: "eqSV" },
    { id: "eqSV-SM", title: "San Miguel", parent: "eqSV" },
    { id: "eqSV-SS", title: "San Salvador", parent: "eqSV" },
    { id: "eqSV-SA", title: "Santa Ana", parent: "eqSV" },
    { id: "eqSV-SV", title: "San Vicente", parent: "eqSV" },
    { id: "eqSV-SO", title: "Sonsonate", parent: "eqSV" },
    { id: "eqSV-SU", title: "Usulután", parent: "eqSV" },
    { id: "eqGQ", title: "Equatorial Guinea", parent: null },
    {
        id: "eqGQ-C",
        title: "Región Continental",
        parent: "eqGQ"
    },
    { id: "eqGQ-CS", title: "Centro Sur", parent: "eqGQ-C" },
    { id: "eqGQ-KN", title: "Kie-Ntem", parent: "eqGQ-C" },
    { id: "eqGQ-LI", title: "Litoral", parent: "eqGQ-C" },
    { id: "eqGQ-WN", title: "Wele-Nzás", parent: "eqGQ-C" },
    { id: "eqGQ-I", title: "Región Insular", parent: "eqGQ" },
    { id: "eqGQ-AN", title: "Annobón", parent: "eqGQ-I" },
    { id: "eqGQ-BN", title: "Bioko Norte", parent: "eqGQ-I" },
    { id: "eqGQ-BS", title: "Bioko Sur", parent: "eqGQ-I" },
    { id: "eqER", title: "Eritrea", parent: null },
    {
        id: "eqER-AG",
        title: "Akele Guzai [Akalä Guzay]",
        parent: "eqER"
    },
    { id: "eqER-AS", title: "Asmara [Asmära]", parent: "eqER" },
    { id: "eqER-BA", title: "Barka", parent: "eqER" },
    {
        id: "eqER-DE",
        title: "Denkalia [Dänkali]",
        parent: "eqER"
    },
    {
        id: "eqER-GS",
        title: "Gash-Setit [Gaš enna Sätit]",
        parent: "eqER"
    },
    {
        id: "eqER-HA",
        title: "Hamasien [Hamasén]",
        parent: "eqER"
    },
    { id: "eqER-SA", title: "Sahel", parent: "eqER" },
    { id: "eqER-SM", title: "Semhar [Sämhar]", parent: "eqER" },
    { id: "eqER-SN", title: "Senhit [Sänhet]", parent: "eqER" },
    { id: "eqER-SR", title: "Seraye [Särayé]", parent: "eqER" },
    { id: "eqEE", title: "Estonia", parent: null },
    { id: "eqEE-37", title: "Harjumaa", parent: "eqEE" },
    { id: "eqEE-39", title: "Hiiumaa", parent: "eqEE" },
    { id: "eqEE-44", title: "Ida-Virumaa", parent: "eqEE" },
    { id: "eqEE-49", title: "Jogevamaa", parent: "eqEE" },
    { id: "eqEE-51", title: "Järvamaa", parent: "eqEE" },
    { id: "eqEE-57", title: "Läänemaa", parent: "eqEE" },
    { id: "eqEE-59", title: "Lääne-Virumaa", parent: "eqEE" },
    { id: "eqEE-65", title: "Polvamaa", parent: "eqEE" },
    { id: "eqEE-67", title: "Pärnumaa", parent: "eqEE" },
    { id: "eqEE-70", title: "Raplamaa", parent: "eqEE" },
    { id: "eqEE-74", title: "Saaremaa", parent: "eqEE" },
    { id: "eqEE-78", title: "Tartumaa", parent: "eqEE" },
    { id: "eqEE-82", title: "Valgamaa", parent: "eqEE" },
    { id: "eqEE-84", title: "Viljandimaa", parent: "eqEE" },
    { id: "eqEE-86", title: "Vorumaa", parent: "eqEE" },
    { id: "eqET", title: "Ethiopia", parent: null },
    {
        id: "eqET-AA",
        title: "Addis Ababa [Addis Abeba]",
        parent: "eqET"
    },
    { id: "eqET-AF", title: "Afar", parent: "eqET" },
    { id: "eqET-AM", title: "Amara [Amhara]", parent: "eqET" },
    {
        id: "eqET-BE",
        title: "Benshangul-Gumaz [Bénishangul]",
        parent: "eqET"
    },
    {
        id: "eqET-GA",
        title: "Gambela Peoples [Gambéla]",
        parent: "eqET"
    },
    {
        id: "eqET-HA",
        title: "Harari People [Harer]",
        parent: "eqET"
    },
    { id: "eqET-OR", title: "Oromia [Oromo]", parent: "eqET" },
    { id: "eqET-SO", title: "Somali", parent: "eqET" },
    {
        id: "eqET-SN",
        title: "Southern Nations, Nationalities and Peoples",
        parent: "eqET"
    },
    { id: "eqET-TI", title: "Tigrai [Tegré]", parent: "eqET" },
    {
        id: "eqFK",
        title: "Falkland Islands (Malvinas)",
        parent: null
    },
    {
        id: "eqFK-FK",
        title: "Falkland Islands (Malvinas)",
        parent: "eqFK"
    },
    { id: "eqFO", title: "Faroe Islands", parent: null },
    { id: "eqFO-FO", title: "Faroe Islands", parent: "eqFO" },
    { id: "eqFJ", title: "Fiji", parent: null },
    { id: "eqFJ-C", title: "Central", parent: "eqFJ" },
    { id: "eqFJ-E", title: "Eastern", parent: "eqFJ" },
    { id: "eqFJ-N", title: "Northern", parent: "eqFJ" },
    { id: "eqFJ-W", title: "Western", parent: "eqFJ" },
    { id: "eqFJ-R", title: "Rotuma", parent: "eqFJ" },
    { id: "eqFI", title: "Finland", parent: null },
    {
        id: "eqFI-AL",
        title: "Ahvenanmaan lääni",
        parent: "eqFI"
    },
    {
        id: "eqFI-ES",
        title: "Etelä-Suomen lääni",
        parent: "eqFI"
    },
    { id: "eqFI-IS", title: "Itä-Suomen lääni", parent: "eqFI" },
    { id: "eqFI-LL", title: "Lapin lääni", parent: "eqFI" },
    {
        id: "eqFI-LS",
        title: "Länsi-Suomen lääni",
        parent: "eqFI"
    },
    { id: "eqFI-OL", title: "Oulun lääni", parent: "eqFI" },
    { id: "eqFR", title: "France", parent: null },
    { id: "eqFR-A", title: "Alsace", parent: "eqFR" },
    { id: "eqFR-67", title: "Bas-Rhin", parent: "eqFR-A" },
    { id: "eqFR-68", title: "Haut-Rhin", parent: "eqFR-A" },
    { id: "eqFR-B", title: "Aquitaine", parent: "eqFR" },
    { id: "eqFR-79", title: "Deux-Sèvres", parent: "eqFR-B" },
    { id: "eqFR-24", title: "Dordogne", parent: "eqFR-B" },
    { id: "eqFR-33", title: "Gironde", parent: "eqFR-B" },
    { id: "eqFR-40", title: "Landes", parent: "eqFR-B" },
    { id: "eqFR-47", title: "Lot-et-Garonne", parent: "eqFR-B" },
    {
        id: "eqFR-64",
        title: "Pyrénées-Atlantiques",
        parent: "eqFR-B"
    },
    { id: "eqFR-C", title: "Auvergne", parent: "eqFR" },
    { id: "eqFR-03", title: "Allier", parent: "eqFR-C" },
    { id: "eqFR-15", title: "Cantal", parent: "eqFR-C" },
    { id: "eqFR-43", title: "Haute-Loire", parent: "eqFR-C" },
    { id: "eqFR-63", title: "Puy-de-Dôme", parent: "eqFR-C" },
    { id: "eqFR-P", title: "Basse-Normandie", parent: "eqFR" },
    { id: "eqFR-14", title: "Calvados", parent: "eqFR-P" },
    { id: "eqFR-50", title: "Manche", parent: "eqFR-P" },
    { id: "eqFR-61", title: "Orne", parent: "eqFR-P" },
    { id: "eqFR-D", title: "Bourgogne", parent: "eqFR" },
    { id: "eqFR-21", title: "Côte-d'Or", parent: "eqFR-D" },
    { id: "eqFR-58", title: "Nièvre", parent: "eqFR-D" },
    { id: "eqFR-71", title: "Saône-et-Loire", parent: "eqFR-D" },
    { id: "eqFR-89", title: "Yonne", parent: "eqFR-D" },
    { id: "eqFR-E", title: "Bretagne", parent: "eqFR" },
    { id: "eqFR-22", title: "Cotes-d'Armor", parent: "eqFR-E" },
    { id: "eqFR-29", title: "Finistère", parent: "eqFR-E" },
    {
        id: "eqFR-35",
        title: "Ille-et-Vilaine",
        parent: "eqFR-E"
    },
    { id: "eqFR-56", title: "Morbihan", parent: "eqFR-E" },
    { id: "eqFR-F", title: "Centre", parent: "eqFR" },
    { id: "eqFR-18", title: "Cher", parent: "eqFR-F" },
    { id: "eqFR-28", title: "Eure-et-Loir", parent: "eqFR-F" },
    { id: "eqFR-36", title: "Indre", parent: "eqFR-F" },
    { id: "eqFR-37", title: "Indre-et-Loire", parent: "eqFR-F" },
    { id: "eqFR-41", title: "Loir-et-Cher", parent: "eqFR-F" },
    { id: "eqFR-45", title: "Loiret", parent: "eqFR-F" },
    { id: "eqFR-G", title: "Champagne-Ardenne", parent: "eqFR" },
    { id: "eqFR-08", title: "Ardennes", parent: "eqFR-G" },
    { id: "eqFR-10", title: "Aube", parent: "eqFR-G" },
    { id: "eqFR-52", title: "Haute-Marne", parent: "eqFR-G" },
    { id: "eqFR-51", title: "Marne", parent: "eqFR-G" },
    { id: "eqFR-H", title: "Corse", parent: "eqFR" },
    { id: "eqFR-2A", title: "Corse-du-Sud", parent: "eqFR-H" },
    { id: "eqFR-2B", title: "Haute-Corse", parent: "eqFR-H" },
    { id: "eqFR-I", title: "Franche-Comté", parent: "eqFR" },
    { id: "eqFR-25", title: "Doubs", parent: "eqFR-I" },
    { id: "eqFR-70", title: "Haute-Saône", parent: "eqFR-I" },
    { id: "eqFR-39", title: "Jura", parent: "eqFR-I" },
    {
        id: "eqFR-90",
        title: "Territoire de Belfort",
        parent: "eqFR-I"
    },
    { id: "eqFR-Q", title: "Haute-Normandie", parent: "eqFR" },
    { id: "eqFR-27", title: "Eure", parent: "eqFR-Q" },
    { id: "eqFR-76", title: "Seine-Maritime", parent: "eqFR-Q" },
    { id: "eqFR-J", title: "Île-de-France", parent: "eqFR" },
    { id: "eqFR-91", title: "Essonne", parent: "eqFR-J" },
    { id: "eqFR-92", title: "Hauts-de-Seine", parent: "eqFR-J" },
    { id: "eqFR-75", title: "Paris", parent: "eqFR-J" },
    { id: "eqFR-77", title: "Seine-et-Marne", parent: "eqFR-J" },
    {
        id: "eqFR-93",
        title: "Seine-Saint-Denis",
        parent: "eqFR-J"
    },
    { id: "eqFR-94", title: "Val-de-Marne", parent: "eqFR-J" },
    { id: "eqFR-95", title: "Val-d'Oise", parent: "eqFR-J" },
    { id: "eqFR-78", title: "Yvelines", parent: "eqFR-J" },
    {
        id: "eqFR-K",
        title: "Languedoc-Roussillon",
        parent: "eqFR"
    },
    { id: "eqFR-11", title: "Aude", parent: "eqFR-K" },
    { id: "eqFR-30", title: "Gard", parent: "eqFR-K" },
    { id: "eqFR-34", title: "Hérault", parent: "eqFR-K" },
    { id: "eqFR-48", title: "Lozère", parent: "eqFR-K" },
    {
        id: "eqFR-66",
        title: "Pyrénées-Orientales",
        parent: "eqFR-K"
    },
    { id: "eqFR-L", title: "Limousin", parent: "eqFR" },
    { id: "eqFR-19", title: "Corrèze", parent: "eqFR-L" },
    { id: "eqFR-23", title: "Creuse", parent: "eqFR-L" },
    { id: "eqFR-87", title: "Haute-Vienne", parent: "eqFR-L" },
    { id: "eqFR-M", title: "Lorraine", parent: "eqFR" },
    {
        id: "eqFR-54",
        title: "Meurthe-et-Moselle",
        parent: "eqFR-M"
    },
    { id: "eqFR-55", title: "Meuse", parent: "eqFR-M" },
    { id: "eqFR-57", title: "Moselle", parent: "eqFR-M" },
    { id: "eqFR-88", title: "Vosges", parent: "eqFR-M" },
    { id: "eqFR-N", title: "Midi-Pyrénées", parent: "eqFR" },
    { id: "eqFR-09", title: "Ariège", parent: "eqFR-N" },
    { id: "eqFR-12", title: "Aveyron", parent: "eqFR-N" },
    { id: "eqFR-32", title: "Gers", parent: "eqFR-N" },
    { id: "eqFR-31", title: "Haute-Garonne", parent: "eqFR-N" },
    {
        id: "eqFR-65",
        title: "Hautes-Pyrénées",
        parent: "eqFR-N"
    },
    { id: "eqFR-46", title: "Lot", parent: "eqFR-N" },
    { id: "eqFR-81", title: "Tarn", parent: "eqFR-N" },
    {
        id: "eqFR-82",
        title: "Tarn-et-Garonne",
        parent: "eqFR-N"
    },
    {
        id: "eqFR-O",
        title: "Nord-Pas-de-Calais",
        parent: "eqFR"
    },
    { id: "eqFR-59", title: "Nord", parent: "eqFR-O" },
    { id: "eqFR-62", title: "Pas-de-Calais", parent: "eqFR-O" },
    { id: "eqFR-R", title: "Pays de la Loire", parent: "eqFR" },
    {
        id: "eqFR-44",
        title: "Loire-Atlantique",
        parent: "eqFR-R"
    },
    { id: "eqFR-49", title: "Maine-et-Loire", parent: "eqFR-R" },
    { id: "eqFR-53", title: "Mayenne", parent: "eqFR-R" },
    { id: "eqFR-72", title: "Sarthe", parent: "eqFR-R" },
    { id: "eqFR-85", title: "Vendée", parent: "eqFR-R" },
    { id: "eqFR-S", title: "Picardie", parent: "eqFR" },
    { id: "eqFR-02", title: "Aisne", parent: "eqFR-S" },
    { id: "eqFR-60", title: "Oise", parent: "eqFR-S" },
    { id: "eqFR-80", title: "Somme", parent: "eqFR-S" },
    { id: "eqFR-T", title: "Poitou-Charentes", parent: "eqFR" },
    { id: "eqFR-16", title: "Charente", parent: "eqFR-T" },
    {
        id: "eqFR-17",
        title: "Charente-Maritime",
        parent: "eqFR-T"
    },
    { id: "eqFR-86", title: "Vienne", parent: "eqFR-T" },
    {
        id: "eqFR-U",
        title: "Provence-Alpes-Côte d'Azur",
        parent: "eqFR"
    },
    {
        id: "eqFR-04",
        title: "Alpes-de-Haute-Provence",
        parent: "eqFR-U"
    },
    {
        id: "eqFR-06",
        title: "Alpes-Maritimes",
        parent: "eqFR-U"
    },
    {
        id: "eqFR-13",
        title: "Bauches-du-Rhône",
        parent: "eqFR-U"
    },
    { id: "eqFR-05", title: "Hautes-Alpes", parent: "eqFR-U" },
    { id: "eqFR-83", title: "Var", parent: "eqFR-U" },
    { id: "eqFR-84", title: "Vaucluse", parent: "eqFR-U" },
    { id: "eqFR-V", title: "Rhône-Alpes", parent: "eqFR" },
    { id: "eqFR-01", title: "Ain", parent: "eqFR-V" },
    { id: "eqFR-07", title: "Ardèche", parent: "eqFR-V" },
    { id: "eqFR-26", title: "Drôme", parent: "eqFR-V" },
    { id: "eqFR-74", title: "Haute-Savoie", parent: "eqFR-V" },
    { id: "eqFR-38", title: "Isère", parent: "eqFR-V" },
    { id: "eqFR-42", title: "Loire", parent: "eqFR-V" },
    { id: "eqFR-69", title: "Rhône", parent: "eqFR-V" },
    { id: "eqFR-73", title: "Savoie", parent: "eqFR-V" },
    { id: "eqFR-GP", title: "Guadeloupe", parent: "eqFR" },
    {
        id: "eqFR-GF",
        title: "Guyane (francaise)",
        parent: "eqFR"
    },
    { id: "eqFR-MQ", title: "Martinique", parent: "eqFR" },
    { id: "eqFR-RE", title: "Réunion", parent: "eqFR" },
    { id: "eqFR-YT", title: "Mayotte", parent: "eqFR" },
    {
        id: "eqFR-PM",
        title: "Saint-Pierre-et-Miquelon",
        parent: "eqFR"
    },
    {
        id: "eqFR-NC",
        title: "Nouvelle-Calédonie",
        parent: "eqFR"
    },
    {
        id: "eqFR-PF",
        title: "Polynésie française",
        parent: "eqFR"
    },
    { id: "eqFR-TF", title: "Terres Australes", parent: "eqFR" },
    { id: "eqFR-WF", title: "Wallis et Futuna", parent: "eqFR" },
    { id: "eqGF", title: "French Guiana", parent: null },
    { id: "eqGF-GF", title: "French Guiana", parent: "eqGF" },
    { id: "eqPF", title: "French Polynesia", parent: null },
    { id: "eqPF-PF", title: "French Polynesia", parent: "eqPF" },
    {
        id: "eqTF",
        title: "French Southern Territories",
        parent: null
    },
    {
        id: "eqTF-TF",
        title: "French Southern Territories",
        parent: "eqTF"
    },
    { id: "eqGA", title: "Gabon", parent: null },
    { id: "eqGA-1", title: "Estuaire", parent: "eqGA" },
    { id: "eqGA-2", title: "Haut-Ogooué", parent: "eqGA" },
    { id: "eqGA-3", title: "Moyen-Ogooué", parent: "eqGA" },
    { id: "eqGA-4", title: "Ngounié", parent: "eqGA" },
    { id: "eqGA-5", title: "Nyanga", parent: "eqGA" },
    { id: "eqGA-6", title: "Ogooué-Ivindo", parent: "eqGA" },
    { id: "eqGA-7", title: "Ogooué-Lolo", parent: "eqGA" },
    { id: "eqGA-8", title: "Ogooué-Maritime", parent: "eqGA" },
    { id: "eqGA-9", title: "Woleu-Ntem", parent: "eqGA" },
    { id: "eqGM", title: "Gambia", parent: null },
    { id: "eqGM-B", title: "Banjul", parent: "eqGM" },
    { id: "eqGM-L", title: "Lower River", parent: "eqGM" },
    { id: "eqGM-M", title: "MacCarthy Island", parent: "eqGM" },
    { id: "eqGM-N", title: "North Bank", parent: "eqGM" },
    { id: "eqGM-U", title: "Upper River", parent: "eqGM" },
    { id: "eqGM-W", title: "Western", parent: "eqGM" },
    { id: "eqGE", title: "Georgia", parent: null },
    {
        id: "eqGE-AB",
        title: "Ap'khazet'is Avtonomiuri Respublika [Abkhazia]",
        parent: "eqGE"
    },
    {
        id: "eqGE-AJ",
        title: "Acharis Avtonomiuri Respublika [Ajaria]",
        parent: "eqGE"
    },
    { id: "eqGE-BUS", title: "Bat'umi", parent: "eqGE" },
    { id: "eqGE-CHI", title: "Chiat'ura", parent: "eqGE" },
    { id: "eqGE-GAG", title: "Gagra", parent: "eqGE" },
    { id: "eqGE-GOR", title: "Gori", parent: "eqGE" },
    { id: "eqGE-KUT", title: "K'ut'aisi", parent: "eqGE" },
    { id: "eqGE-PTI", title: "P'ot'i", parent: "eqGE" },
    { id: "eqGE-RUS", title: "Rust'avi", parent: "eqGE" },
    { id: "eqGE-SUI", title: "Sokhumi", parent: "eqGE" },
    { id: "eqGE-TBS", title: "T'bilisi", parent: "eqGE" },
    { id: "eqGE-TQI", title: "Tqibuli", parent: "eqGE" },
    { id: "eqGE-TQV", title: "Tqvarch'eli", parent: "eqGE" },
    { id: "eqGE-TSQ", title: "Tsqalmbo", parent: "eqGE" },
    { id: "eqGE-ZUG", title: "Zugdidi", parent: "eqGE" },
    { id: "eqGE-01", title: "Abashis Raioni", parent: "eqGE" },
    { id: "eqGE-02", title: "Adigenis Raioni", parent: "eqGE" },
    {
        id: "eqGE-03",
        title: "Akhalgoris Raioni",
        parent: "eqGE"
    },
    {
        id: "eqGE-04",
        title: "Akhalk'alak'is Raioni",
        parent: "eqGE"
    },
    {
        id: "eqGE-05",
        title: "Akhalts'ikhis Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-06", title: "Akhmetis Raioni", parent: "eqGE" },
    {
        id: "eqGE-07",
        title: "Ambrolauris Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-08", title: "Aspindzis Raioni", parent: "eqGE" },
    {
        id: "eqGE-09",
        title: "Baghdat'is Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-10", title: "Bolnisis Raioni", parent: "eqGE" },
    { id: "eqGE-11", title: "Borjomis Raioni", parent: "eqGE" },
    {
        id: "eqGE-12",
        title: "Ch'khorotsqus Raioni",
        parent: "eqGE"
    },
    {
        id: "eqGE-13",
        title: "Ch'okhatauris Raioni",
        parent: "eqGE"
    },
    {
        id: "eqGE-14",
        title: "Dedop'listsqaros Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-15", title: "Dmanisis Raioni", parent: "eqGE" },
    { id: "eqGE-16", title: "Dushet'is Raioni", parent: "eqGE" },
    { id: "eqGE-17", title: "Galis Raioni", parent: "eqGE" },
    { id: "eqGE-18", title: "Gardabnis Raioni", parent: "eqGE" },
    { id: "eqGE-19", title: "Goris Raioni", parent: "eqGE" },
    { id: "eqGE-20", title: "Gudaut'is Raioni", parent: "eqGE" },
    {
        id: "eqGE-21",
        title: "Gulrip'shis Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-22", title: "Gurjaanis Raioni", parent: "eqGE" },
    { id: "eqGE-23", title: "Javis Raioni", parent: "eqGE" },
    { id: "eqGE-24", title: "K'arelis Raioni", parent: "eqGE" },
    { id: "eqGE-25", title: "Kaspis Raioni", parent: "eqGE" },
    { id: "eqGE-26", title: "K'edis Raioni", parent: "eqGE" },
    {
        id: "eqGE-27",
        title: "Kharagaulis Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-28", title: "Khashuris Raioni", parent: "eqGE" },
    {
        id: "eqGE-29",
        title: "Khelvach'auris Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-30", title: "Khobis Raioni", parent: "eqGE" },
    { id: "eqGE-31", title: "Khonis Raioni", parent: "eqGE" },
    { id: "eqGE-32", title: "Khulos Raioni", parent: "eqGE" },
    {
        id: "eqGE-33",
        title: "K'obuletis Raioni",
        parent: "eqGE"
    },
    {
        id: "eqGE-34",
        title: "Lagodekhis Raioni",
        parent: "eqGE"
    },
    {
        id: "eqGE-35",
        title: "Lanch'khut'is Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-36", title: "Lentekhis Raioni", parent: "eqGE" },
    { id: "eqGE-37", title: "Marneulis Raioni", parent: "eqGE" },
    { id: "eqGE-38", title: "Martvilis Raioni", parent: "eqGE" },
    { id: "eqGE-39", title: "Mestiis Raioni", parent: "eqGE" },
    {
        id: "eqGE-40",
        title: "Mts'khet'is Raioni",
        parent: "eqGE"
    },
    {
        id: "eqGE-41",
        title: "Ninotsmindis Raioni",
        parent: "eqGE"
    },
    {
        id: "eqGE-42",
        title: "Och'amch'iris Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-43", title: "Onis Raioni", parent: "eqGE" },
    {
        id: "eqGE-44",
        title: "Ozurget'is Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-45", title: "Qazbegis Raioni", parent: "eqGE" },
    { id: "eqGE-46", title: "Qvarlis Raioni", parent: "eqGE" },
    {
        id: "eqGE-47",
        title: "Sach'kheris Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-48", title: "Sagarejos Raioni", parent: "eqGE" },
    {
        id: "eqGE-49",
        title: "Samtrediis Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-50", title: "Senakis Raioni", parent: "eqGE" },
    {
        id: "eqGE-51",
        title: "Shuakhevis Raioni",
        parent: "eqGE"
    },
    {
        id: "eqGE-52",
        title: "Sighnaghis Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-53", title: "Sokhumis Raioni", parent: "eqGE" },
    { id: "eqGE-54", title: "T'elavis Raioni", parent: "eqGE" },
    { id: "eqGE-55", title: "T'erjolis Raioni", parent: "eqGE" },
    {
        id: "eqGE-56",
        title: "T'et'ritsqaros Raioni",
        parent: "eqGE"
    },
    {
        id: "eqGE-57",
        title: "T'ianet'is Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-58", title: "Ts'ageris Raioni", parent: "eqGE" },
    {
        id: "eqGE-59",
        title: "Tsalenjikhis Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-60", title: "Tsalkis Raioni", parent: "eqGE" },
    { id: "eqGE-61", title: "Vanis Raioni", parent: "eqGE" },
    {
        id: "eqGE-62",
        title: "Zestap'onis Raioni",
        parent: "eqGE"
    },
    { id: "eqGE-63", title: "Zugdidis Raioni", parent: "eqGE" },
    { id: "eqDE", title: "Germany", parent: null },
    {
        id: "eqDE-BW",
        title: "Baden-Württemberg",
        parent: "eqDE"
    },
    { id: "eqDE-BY", title: "Bayern", parent: "eqDE" },
    { id: "eqDE-BE", title: "Berlin", parent: "eqDE" },
    { id: "eqDE-BB", title: "Brandenburg", parent: "eqDE" },
    { id: "eqDE-HB", title: "Bremen", parent: "eqDE" },
    { id: "eqDE-HH", title: "Hamburg", parent: "eqDE" },
    { id: "eqDE-HE", title: "Hessen", parent: "eqDE" },
    {
        id: "eqDE-MV",
        title: "Mecklenburg-Vorpommern",
        parent: "eqDE"
    },
    { id: "eqDE-NI", title: "Niedersachsen", parent: "eqDE" },
    {
        id: "eqDE-NW",
        title: "Nordrhein-Westfalen",
        parent: "eqDE"
    },
    { id: "eqDE-RP", title: "Rheinland-Pfalz", parent: "eqDE" },
    { id: "eqDE-SL", title: "Saarland", parent: "eqDE" },
    { id: "eqDE-SN", title: "Sachsen", parent: "eqDE" },
    { id: "eqDE-ST", title: "Sachsen-Anhalt", parent: "eqDE" },
    {
        id: "eqDE-SH",
        title: "Schleswig-Holstein",
        parent: "eqDE"
    },
    { id: "eqDE-TH", title: "Thüringen", parent: "eqDE" },
    { id: "eqGH", title: "Ghana", parent: null },
    { id: "eqGH-AH", title: "Ashanti", parent: "eqGH" },
    { id: "eqGH-BA", title: "Brong-Ahafo", parent: "eqGH" },
    { id: "eqGH-CP", title: "Central", parent: "eqGH" },
    { id: "eqGH-EP", title: "Eastern", parent: "eqGH" },
    { id: "eqGH-AA", title: "Greater Accra", parent: "eqGH" },
    { id: "eqGH-NP", title: "Northern", parent: "eqGH" },
    { id: "eqGH-UE", title: "Upper East", parent: "eqGH" },
    { id: "eqGH-UW", title: "Upper West", parent: "eqGH" },
    { id: "eqGH-TV", title: "Volta", parent: "eqGH" },
    { id: "eqGH-WP", title: "Western", parent: "eqGH" },
    { id: "eqGI", title: "Gibraltar", parent: null },
    { id: "eqGI-GI", title: "Gibraltar", parent: "eqGI" },
    { id: "eqGR", title: "Greece", parent: null },
    {
        id: "eqGR-I",
        title: "Anatoliki Makedonia kai Thraki",
        parent: "eqGR"
    },
    { id: "eqGR-52", title: "Drama", parent: "eqGR-I" },
    { id: "eqGR-71", title: "Evros", parent: "eqGR-I" },
    { id: "eqGR-55", title: "Kavalla", parent: "eqGR-I" },
    { id: "eqGR-73", title: "Rodopi", parent: "eqGR-I" },
    { id: "eqGR-72", title: "Xanthi", parent: "eqGR-I" },
    { id: "eqGR-IX", title: "Attiki", parent: "eqGR" },
    { id: "eqGR-A1", title: "Attiki", parent: "eqGR-IX" },
    { id: "eqGR-VII", title: "Dytiki Ellada", parent: "eqGR" },
    { id: "eqGR-13", title: "Achaïa", parent: "eqGR-VII" },
    {
        id: "eqGR-01",
        title: "Aitolia-Akarnania",
        parent: "eqGR-VII"
    },
    { id: "eqGR-14", title: "Ileia", parent: "eqGR-VII" },
    {
        id: "eqGR-III",
        title: "Dytiki Makedonia",
        parent: "eqGR"
    },
    { id: "eqGR-63", title: "Florina", parent: "eqGR-III" },
    { id: "eqGR-51", title: "Grevena", parent: "eqGR-III" },
    { id: "eqGR-56", title: "Kastoria", parent: "eqGR-III" },
    { id: "eqGR-58", title: "Kozani", parent: "eqGR-III" },
    { id: "eqGR-VI", title: "Ionioi Nisoi", parent: "eqGR" },
    { id: "eqGR-23", title: "Kefallinia", parent: "eqGR-VI" },
    { id: "eqGR-22", title: "Kerkyra", parent: "eqGR-VI" },
    { id: "eqGR-24", title: "Lefkas", parent: "eqGR-VI" },
    { id: "eqGR-21", title: "Zakynthos", parent: "eqGR-VI" },
    { id: "eqGR-IV", title: "Ipeiros", parent: "eqGR" },
    { id: "eqGR-31", title: "Arta", parent: "eqGR-IV" },
    { id: "eqGR-33", title: "Ioannina", parent: "eqGR-IV" },
    { id: "eqGR-34", title: "Preveza", parent: "eqGR-IV" },
    { id: "eqGR-32", title: "Thesprotia", parent: "eqGR-IV" },
    {
        id: "eqGR-II",
        title: "Kentriki Makedonia",
        parent: "eqGR"
    },
    { id: "eqGR-64", title: "Chalkidiki", parent: "eqGR-II" },
    { id: "eqGR-53", title: "Imathia", parent: "eqGR-II" },
    { id: "eqGR-57", title: "Kilkis", parent: "eqGR-II" },
    { id: "eqGR-59", title: "Pella", parent: "eqGR-II" },
    { id: "eqGR-61", title: "Pieria", parent: "eqGR-II" },
    { id: "eqGR-62", title: "Serrai", parent: "eqGR-II" },
    { id: "eqGR-54", title: "Thessaloniki", parent: "eqGR-II" },
    { id: "eqGR-XIII", title: "Kriti", parent: "eqGR" },
    { id: "eqGR-94", title: "Chania", parent: "eqGR-XIII" },
    { id: "eqGR-91", title: "Irakleion", parent: "eqGR-XIII" },
    { id: "eqGR-92", title: "Lasithion", parent: "eqGR-XIII" },
    { id: "eqGR-93", title: "Rethymnon", parent: "eqGR-XIII" },
    { id: "eqGR-XII", title: "Notio Aigaio", parent: "eqGR" },
    { id: "eqGR-81", title: "Dodekanisos", parent: "eqGR-XII" },
    { id: "eqGR-82", title: "Kyklades", parent: "eqGR-XII" },
    { id: "eqGR-X", title: "Peloponnisos", parent: "eqGR" },
    { id: "eqGR-11", title: "Argolis", parent: "eqGR-X" },
    { id: "eqGR-12", title: "Arkadia", parent: "eqGR-X" },
    { id: "eqGR-15", title: "Korinthia", parent: "eqGR-X" },
    { id: "eqGR-16", title: "Lakonia", parent: "eqGR-X" },
    { id: "eqGR-17", title: "Messinia", parent: "eqGR-X" },
    { id: "eqGR-VIII", title: "Sterea Ellada", parent: "eqGR" },
    { id: "eqGR-05", title: "Evrytania", parent: "eqGR-VIII" },
    { id: "eqGR-04", title: "Evvoia", parent: "eqGR-VIII" },
    { id: "eqGR-07", title: "Fokis", parent: "eqGR-VIII" },
    { id: "eqGR-06", title: "Fthiotis", parent: "eqGR-VIII" },
    { id: "eqGR-03", title: "Voiotia", parent: "eqGR-VIII" },
    { id: "eqGR-V", title: "Thessalia", parent: "eqGR" },
    { id: "eqGR-41", title: "Karditsa", parent: "eqGR-V" },
    { id: "eqGR-42", title: "Larisa", parent: "eqGR-V" },
    { id: "eqGR-43", title: "Magnisia", parent: "eqGR-V" },
    { id: "eqGR-44", title: "Trikala", parent: "eqGR-V" },
    { id: "eqGR-XI", title: "Voreio Aigaio", parent: "eqGR" },
    { id: "eqGR-85", title: "Chios", parent: "eqGR-XI" },
    { id: "eqGR-83", title: "Lesvos", parent: "eqGR-XI" },
    { id: "eqGR-84", title: "Samos", parent: "eqGR-XI" },
    { id: "eqGL", title: "Greenland", parent: null },
    { id: "eqGL-GL", title: "Greenland", parent: "eqGL" },
    { id: "eqGD", title: "Grenada", parent: null },
    { id: "eqGD-GD", title: "Grenada", parent: "eqGD" },
    { id: "eqGP", title: "Guadeloupe", parent: null },
    { id: "eqGP-GP", title: "Guadeloupe", parent: "eqGP" },
    { id: "eqGU", title: "Guam", parent: null },
    { id: "eqGU-GU", title: "Guam", parent: "eqGU" },
    { id: "eqGT", title: "Guatemala", parent: null },
    { id: "eqGT-AV", title: "Alta Verapaz", parent: "eqGT" },
    { id: "eqGT-BV", title: "Baja Verapaz", parent: "eqGT" },
    { id: "eqGT-CM", title: "Chimaltenango", parent: "eqGT" },
    { id: "eqGT-CQ", title: "Chiquimula", parent: "eqGT" },
    { id: "eqGT-PR", title: "El Progreso", parent: "eqGT" },
    { id: "eqGT-ES", title: "Escuintla", parent: "eqGT" },
    { id: "eqGT-GU", title: "Guatemala", parent: "eqGT" },
    { id: "eqGT-HU", title: "Huehuetenango", parent: "eqGT" },
    { id: "eqGT-IZ", title: "Izabal", parent: "eqGT" },
    { id: "eqGT-JA", title: "Jalapa", parent: "eqGT" },
    { id: "eqGT-JU", title: "Jutiapa", parent: "eqGT" },
    { id: "eqGT-PE", title: "Petén", parent: "eqGT" },
    { id: "eqGT-QZ", title: "Quezaltenango", parent: "eqGT" },
    { id: "eqGT-QC", title: "Quiché", parent: "eqGT" },
    { id: "eqGT-RE", title: "Retalhuleu", parent: "eqGT" },
    { id: "eqGT-SA", title: "Sacatepéquez", parent: "eqGT" },
    { id: "eqGT-SM", title: "San Marcos", parent: "eqGT" },
    { id: "eqGT-SR", title: "Santa Rosa", parent: "eqGT" },
    { id: "eqGT-SO", title: "Sololá", parent: "eqGT" },
    { id: "eqGT-SU", title: "Suchitepéquez", parent: "eqGT" },
    { id: "eqGT-TO", title: "Totonicapán", parent: "eqGT" },
    { id: "eqGT-ZA", title: "Zacapa", parent: "eqGT" },
    { id: "eqGN", title: "Guinea", parent: null },
    {
        id: "eqGN-B",
        title: "Bake, Gouvernorat de",
        parent: "eqGN"
    },
    { id: "eqGN-BF", title: "Boffa", parent: "eqGN-B" },
    { id: "eqGN-BK", title: "Boké", parent: "eqGN-B" },
    { id: "eqGN-FR", title: "Fria", parent: "eqGN-B" },
    { id: "eqGN-GA", title: "Gaoual", parent: "eqGN-B" },
    { id: "eqGN-KD", title: "Koundara", parent: "eqGN-B" },
    {
        id: "eqGN-C",
        title: "Conakry, Gouvernorat de",
        parent: "eqGN"
    },
    {
        id: "eqGN-F",
        title: "Faranah, Gouvernorat de",
        parent: "eqGN"
    },
    { id: "eqGN-DB", title: "Dabola", parent: "eqGN-F" },
    { id: "eqGN-DI", title: "Dinguiraye", parent: "eqGN-F" },
    { id: "eqGN-FA", title: "Faranah", parent: "eqGN-F" },
    { id: "eqGN-KS", title: "Kissidougou", parent: "eqGN-F" },
    {
        id: "eqGN-K",
        title: "Kankan, Gouvernorat de",
        parent: "eqGN"
    },
    { id: "eqGN-KA", title: "Kankan", parent: "eqGN-K" },
    { id: "eqGN-KE", title: "Kérouané", parent: "eqGN-K" },
    { id: "eqGN-KO", title: "Kouroussa", parent: "eqGN-K" },
    { id: "eqGN-MD", title: "Mandiana", parent: "eqGN-K" },
    { id: "eqGN-SI", title: "Siguiri", parent: "eqGN-K" },
    {
        id: "eqGN-D",
        title: "Kindia, Gouvernorat de",
        parent: "eqGN"
    },
    { id: "eqGN-CO", title: "Coyah", parent: "eqGN-D" },
    { id: "eqGN-DU", title: "Dubréka", parent: "eqGN-D" },
    { id: "eqGN-FO", title: "Forécariah", parent: "eqGN-D" },
    { id: "eqGN-TE", title: "Télimélé", parent: "eqGN-D" },
    {
        id: "eqGN-L",
        title: "Labé, Gouvernorat de",
        parent: "eqGN"
    },
    { id: "eqGN-KB", title: "Koubia", parent: "eqGN-L" },
    { id: "eqGN-LA", title: "Labé", parent: "eqGN-L" },
    { id: "eqGN-LE", title: "Lélouma", parent: "eqGN-L" },
    { id: "eqGN-ML", title: "Mali", parent: "eqGN-L" },
    { id: "eqGN-TO", title: "Tougué", parent: "eqGN-L" },
    {
        id: "eqGN-M",
        title: "Mamou, Gouvernorat de",
        parent: "eqGN"
    },
    { id: "eqGN-DL", title: "Dalaba", parent: "eqGN-M" },
    { id: "eqGN-MM", title: "Mamou", parent: "eqGN-M" },
    { id: "eqGN-PI", title: "Pita", parent: "eqGN-M" },
    {
        id: "eqGN-N",
        title: "Nzérékoré, Gouvernorat de",
        parent: "eqGN"
    },
    { id: "eqGN-BE", title: "Beyla", parent: "eqGN-N" },
    { id: "eqGN-GU", title: "Guékédou", parent: "eqGN-N" },
    { id: "eqGN-LO", title: "Lola", parent: "eqGN-N" },
    { id: "eqGN-MC", title: "Macenta", parent: "eqGN-N" },
    { id: "eqGN-NZ", title: "Nzérékoré", parent: "eqGN-N" },
    { id: "eqGN-YO", title: "Yomou", parent: "eqGN-N" },
    { id: "eqGW", title: "Guinea-Bissau", parent: null },
    { id: "eqGW-BS", title: "Bissau", parent: "eqGW" },
    { id: "eqGW-BA", title: "Bafatá", parent: "eqGW" },
    { id: "eqGW-BM", title: "Biombo", parent: "eqGW" },
    { id: "eqGW-BL", title: "Bolama", parent: "eqGW" },
    { id: "eqGW-CA", title: "Cacheu", parent: "eqGW" },
    { id: "eqGW-GA", title: "Gabú", parent: "eqGW" },
    { id: "eqGW-OI", title: "Oio", parent: "eqGW" },
    { id: "eqGW-QU", title: "Quinara", parent: "eqGW" },
    { id: "eqGY", title: "Guyana", parent: null },
    { id: "eqGY-BA", title: "Barima-Waini", parent: "eqGY" },
    { id: "eqGY-CU", title: "Cuyuni-Mazaruni", parent: "eqGY" },
    { id: "eqGY-DE", title: "Demerara-Mahaica", parent: "eqGY" },
    {
        id: "eqGY-EB",
        title: "East Berbice-Corentyne",
        parent: "eqGY"
    },
    {
        id: "eqGY-ES",
        title: "Essequibo Islands-West Demerara",
        parent: "eqGY"
    },
    { id: "eqGY-MA", title: "Mahaica-Berbice", parent: "eqGY" },
    {
        id: "eqGY-PM",
        title: "Pomeroon-Supenaam",
        parent: "eqGY"
    },
    { id: "eqGY-PT", title: "Potaro-Siparuni", parent: "eqGY" },
    {
        id: "eqGY-UD",
        title: "Upper Demerara-Berbice",
        parent: "eqGY"
    },
    {
        id: "eqGY-UT",
        title: "Upper Takutu-Upper Essequibo",
        parent: "eqGY"
    },
    { id: "eqHT", title: "Haiti", parent: null },
    { id: "eqHT-AR", title: "Artibonite", parent: "eqHT" },
    { id: "eqHT-CE", title: "Centre", parent: "eqHT" },
    { id: "eqHT-GA", title: "Grande-Anse", parent: "eqHT" },
    { id: "eqHT-ND", title: "Nord", parent: "eqHT" },
    { id: "eqHT-NE", title: "Nord-Est", parent: "eqHT" },
    { id: "eqHT-NO", title: "Nord-Ouest", parent: "eqHT" },
    { id: "eqHT-OU", title: "Ouest", parent: "eqHT" },
    { id: "eqHT-SD", title: "Sud", parent: "eqHT" },
    { id: "eqHT-SE", title: "Sud-Est", parent: "eqHT" },
    {
        id: "eqHM",
        title: "Heard & McDonald Islands",
        parent: null
    },
    {
        id: "eqHM-HM",
        title: "Heard & McDonald Islands",
        parent: "eqHM"
    },
    { id: "eqHN", title: "Honduras", parent: null },
    { id: "eqHN-AT", title: "Atlántida", parent: "eqHN" },
    { id: "eqHN-CL", title: "Colón", parent: "eqHN" },
    { id: "eqHN-CM", title: "Comayagua", parent: "eqHN" },
    { id: "eqHN-CP", title: "Copán", parent: "eqHN" },
    { id: "eqHN-CR", title: "Cortés", parent: "eqHN" },
    { id: "eqHN-CH", title: "Choluteca", parent: "eqHN" },
    { id: "eqHN-EP", title: "El Paraíso", parent: "eqHN" },
    {
        id: "eqHN-FM",
        title: "Francisco Morazán",
        parent: "eqHN"
    },
    { id: "eqHN-GD", title: "Gracias a Dios", parent: "eqHN" },
    { id: "eqHN-IN", title: "Intibucá", parent: "eqHN" },
    {
        id: "eqHN-IB",
        title: "Islas de la Bahía",
        parent: "eqHN"
    },
    { id: "eqHN-LP", title: "La Paz", parent: "eqHN" },
    { id: "eqHN-LE", title: "Lempira", parent: "eqHN" },
    { id: "eqHN-OC", title: "Ocotepeque", parent: "eqHN" },
    { id: "eqHN-OL", title: "Olancho", parent: "eqHN" },
    { id: "eqHN-SB", title: "Santa Bárbara", parent: "eqHN" },
    { id: "eqHN-VA", title: "Valle", parent: "eqHN" },
    { id: "eqHN-YO", title: "Yoro", parent: "eqHN" },
    { id: "eqHK", title: "Hong Kong", parent: null },
    { id: "eqHK-HK", title: "Hong Kong", parent: "eqHK" },
    { id: "eqHU", title: "Hungary", parent: null },
    { id: "eqHU-BU", title: "Budapest", parent: "eqHU" },
    { id: "eqHU-BK", title: "Bács-Kiskun", parent: "eqHU" },
    { id: "eqHU-BA", title: "Baranya", parent: "eqHU" },
    { id: "eqHU-BE", title: "Békés", parent: "eqHU" },
    {
        id: "eqHU-BZ",
        title: "Borsod-Abaúj-Zemplén",
        parent: "eqHU"
    },
    { id: "eqHU-CS", title: "Csongrád", parent: "eqHU" },
    { id: "eqHU-FE", title: "Fejér", parent: "eqHU" },
    {
        id: "eqHU-GS",
        title: "Gyór-Moson-Sopron",
        parent: "eqHU"
    },
    { id: "eqHU-HB", title: "Hajdú-Bihar", parent: "eqHU" },
    { id: "eqHU-HE", title: "Heves", parent: "eqHU" },
    {
        id: "eqHU-JN",
        title: "Jasz-Nagykun-Szolnok",
        parent: "eqHU"
    },
    {
        id: "eqHU-KE",
        title: "Komárom-Esztergom",
        parent: "eqHU"
    },
    { id: "eqHU-NO", title: "Nógrád", parent: "eqHU" },
    { id: "eqHU-PE", title: "Pest", parent: "eqHU" },
    { id: "eqHU-SO", title: "Somogy", parent: "eqHU" },
    {
        id: "eqHU-SZ",
        title: "Szabolcs-Szatmár-Bereg",
        parent: "eqHU"
    },
    { id: "eqHU-TO", title: "Tolna", parent: "eqHU" },
    { id: "eqHU-VA", title: "Vas", parent: "eqHU" },
    { id: "eqHU-VE", title: "Veszprém", parent: "eqHU" },
    { id: "eqHU-ZA", title: "Zala", parent: "eqHU" },
    { id: "eqHU-BC", title: "Békéscsaba", parent: "eqHU" },
    { id: "eqHU-DE", title: "Debrecen", parent: "eqHU" },
    { id: "eqHU-DU", title: "Dunaújváros", parent: "eqHU" },
    { id: "eqHU-EG", title: "Eger", parent: "eqHU" },
    { id: "eqHU-GY", title: "Gyór", parent: "eqHU" },
    { id: "eqHU-HV", title: "Hódmezóvásárhely", parent: "eqHU" },
    { id: "eqHU-KV", title: "Kaposvár", parent: "eqHU" },
    { id: "eqHU-KM", title: "Kecskemét", parent: "eqHU" },
    { id: "eqHU-MI", title: "Miskolc", parent: "eqHU" },
    { id: "eqHU-NK", title: "Nagykanizsa", parent: "eqHU" },
    { id: "eqHU-NY", title: "Nyíregyháza", parent: "eqHU" },
    { id: "eqHU-PS", title: "Pécs", parent: "eqHU" },
    { id: "eqHU-ST", title: "Salgótarján", parent: "eqHU" },
    { id: "eqHU-SN", title: "Sopron", parent: "eqHU" },
    { id: "eqHU-SD", title: "Szeged", parent: "eqHU" },
    { id: "eqHU-SF", title: "Székesfehérvár", parent: "eqHU" },
    { id: "eqHU-SS", title: "Szekszárd", parent: "eqHU" },
    { id: "eqHU-SK", title: "Szolnok", parent: "eqHU" },
    { id: "eqHU-SH", title: "Szombathely", parent: "eqHU" },
    { id: "eqHU-TB", title: "Tatabánya", parent: "eqHU" },
    { id: "eqHU-VM", title: "Veszprém", parent: "eqHU" },
    { id: "eqHU-ZE", title: "Zalaegerszeg", parent: "eqHU" },
    { id: "eqIS", title: "Iceland", parent: null },
    { id: "eqIS-7", title: "Austurland", parent: "eqIS" },
    {
        id: "eqIS-1",
        title: "Höfudborgarsvædi utan Reykjavíkur",
        parent: "eqIS"
    },
    { id: "eqIS-6", title: "Nordurland eystra", parent: "eqIS" },
    { id: "eqIS-5", title: "Nordurland vestra", parent: "eqIS" },
    { id: "eqIS-0", title: "Reykjavik", parent: "eqIS" },
    { id: "eqIS-8", title: "Sudurland", parent: "eqIS" },
    { id: "eqIS-2", title: "Sudurnes", parent: "eqIS" },
    { id: "eqIS-4", title: "Vestfirdir", parent: "eqIS" },
    { id: "eqIS-3", title: "Vesturland", parent: "eqIS" },
    { id: "eqIN", title: "India", parent: null },
    { id: "eqIN-AP", title: "Andhra Pradesh", parent: "eqIN" },
    {
        id: "eqIN-AR",
        title: "Arunachal Pradesh",
        parent: "eqIN"
    },
    { id: "eqIN-AS", title: "Assam", parent: "eqIN" },
    { id: "eqIN-BR", title: "Bihar", parent: "eqIN" },
    { id: "eqIN-GA", title: "Goa", parent: "eqIN" },
    { id: "eqIN-GJ", title: "Gujarat", parent: "eqIN" },
    { id: "eqIN-HR", title: "Haryana", parent: "eqIN" },
    { id: "eqIN-HP", title: "Himachal Pradesh", parent: "eqIN" },
    {
        id: "eqIN-JK",
        title: "Jammu and Kashmir",
        parent: "eqIN"
    },
    { id: "eqIN-KA", title: "Karnataka", parent: "eqIN" },
    { id: "eqIN-KL", title: "Kerala", parent: "eqIN" },
    { id: "eqIN-MP", title: "Madhya Pradesh", parent: "eqIN" },
    { id: "eqIN-MH", title: "Maharashtra", parent: "eqIN" },
    { id: "eqIN-MN", title: "Manipur", parent: "eqIN" },
    { id: "eqIN-ML", title: "Meghalaya", parent: "eqIN" },
    { id: "eqIN-MZ", title: "Mizoram", parent: "eqIN" },
    { id: "eqIN-NL", title: "Nagaland", parent: "eqIN" },
    { id: "eqIN-OR", title: "Orissa", parent: "eqIN" },
    { id: "eqIN-PB", title: "Punjab", parent: "eqIN" },
    { id: "eqIN-RJ", title: "Rajasthan", parent: "eqIN" },
    { id: "eqIN-SK", title: "Sikkim", parent: "eqIN" },
    { id: "eqIN-TN", title: "Tamil Nadu", parent: "eqIN" },
    { id: "eqIN-TR", title: "Tripura", parent: "eqIN" },
    { id: "eqIN-UP", title: "Uttar Pradesh", parent: "eqIN" },
    { id: "eqIN-WB", title: "West Bengal", parent: "eqIN" },
    {
        id: "eqIN-AN",
        title: "Andaman and Nicobar Islands",
        parent: "eqIN"
    },
    { id: "eqIN-CH", title: "Chandigarh", parent: "eqIN" },
    {
        id: "eqIN-DN",
        title: "Dadra and Nagar Haveli",
        parent: "eqIN"
    },
    { id: "eqIN-DD", title: "Daman and Diu", parent: "eqIN" },
    { id: "eqIN-DL", title: "Delhi", parent: "eqIN" },
    { id: "eqIN-LD", title: "Lakshadweep", parent: "eqIN" },
    { id: "eqIN-PY", title: "Pondicherry", parent: "eqIN" },
    { id: "eqID", title: "Indonesia", parent: null },
    { id: "eqID-IJU", title: "Irian Jaya", parent: "eqID" },
    { id: "eqID-IJ", title: "Irian Jaya", parent: "eqID-IJU" },
    { id: "eqID-JWU", title: "Jawa", parent: "eqID" },
    { id: "eqID-JB", title: "Jawa Barat", parent: "eqID-JWU" },
    { id: "eqID-JT", title: "Jawa Tengah", parent: "eqID-JWU" },
    { id: "eqID-JI", title: "Jawa Timur", parent: "eqID-JWU" },
    { id: "eqID-JK", title: "Jakarta Raya", parent: "eqID-JWU" },
    { id: "eqID-YO", title: "Yogyakarta", parent: "eqID-JWU" },
    { id: "eqID-KAU", title: "Kalimantan", parent: "eqID" },
    {
        id: "eqID-KB",
        title: "Kalimantan Barat",
        parent: "eqID-KAU"
    },
    {
        id: "eqID-KS",
        title: "Kalimantan Selatan",
        parent: "eqID-KAU"
    },
    {
        id: "eqID-KT",
        title: "Kalimantan Tengah",
        parent: "eqID-KAU"
    },
    {
        id: "eqID-KI",
        title: "Kalimantan Timur",
        parent: "eqID-KAU"
    },
    { id: "eqID-MAU", title: "Maluku", parent: "eqID" },
    { id: "eqID-MA", title: "Maluku", parent: "eqID-MAU" },
    { id: "eqID-NUU", title: "Nusa Tenggara", parent: "eqID" },
    { id: "eqID-BA", title: "Bali", parent: "eqID-NUU" },
    {
        id: "eqID-NB",
        title: "Nusa Tenggara Barat",
        parent: "eqID-NUU"
    },
    {
        id: "eqID-NT",
        title: "Nusa Tenggara Timur",
        parent: "eqID-NUU"
    },
    { id: "eqID-TT", title: "Timor Timur", parent: "eqID-NUU" },
    { id: "eqID-SLU", title: "Sulawesi", parent: "eqID" },
    {
        id: "eqID-SN",
        title: "Sulawesi Selatan",
        parent: "eqID-SLU"
    },
    {
        id: "eqID-ST",
        title: "Sulawesi Tengah",
        parent: "eqID-SLU"
    },
    {
        id: "eqID-SG",
        title: "Sulawesi Tenggara",
        parent: "eqID-SLU"
    },
    {
        id: "eqID-SA",
        title: "Sulawesi Utara",
        parent: "eqID-SLU"
    },
    { id: "eqID-SMU", title: "Sumatera", parent: "eqID" },
    { id: "eqID-BE", title: "Bengkulu", parent: "eqID-SMU" },
    { id: "eqID-JA", title: "Jambi", parent: "eqID-SMU" },
    { id: "eqID-LA", title: "Lampung", parent: "eqID-SMU" },
    { id: "eqID-RI", title: "Riau", parent: "eqID-SMU" },
    {
        id: "eqID-SB",
        title: "Sumatera Barat",
        parent: "eqID-SMU"
    },
    {
        id: "eqID-SS",
        title: "Sumatera Selatan",
        parent: "eqID-SMU"
    },
    {
        id: "eqID-SU",
        title: "Sumatera Utara",
        parent: "eqID-SMU"
    },
    { id: "eqID-AC", title: "Aceh", parent: "eqID-SMU" },
    { id: "eqIR", title: "Iran", parent: null },
    { id: "eqIR-03", title: "Ardabil", parent: "eqIR" },
    {
        id: "eqIR-02",
        title: "Azarbayjan-e-Gharbi",
        parent: "eqIR"
    },
    {
        id: "eqIR-01",
        title: "Azarbayjan-e-Sharqi",
        parent: "eqIR"
    },
    { id: "eqIR-06", title: "Bushehr", parent: "eqIR" },
    {
        id: "eqIR-08",
        title: "Chahar Ma?all va Bakhtiari",
        parent: "eqIR"
    },
    { id: "eqIR-04", title: "Esfahan", parent: "eqIR" },
    { id: "eqIR-14", title: "Fars", parent: "eqIR" },
    { id: "eqIR-19", title: "Gilan", parent: "eqIR" },
    { id: "eqIR-24", title: "Hamadan", parent: "eqIR" },
    { id: "eqIR-23", title: "Hormozgan", parent: "eqIR" },
    { id: "eqIR-05", title: "Ilam", parent: "eqIR" },
    { id: "eqIR-15", title: "Kerman", parent: "eqIR" },
    { id: "eqIR-17", title: "Kermanshahan", parent: "eqIR" },
    { id: "eqIR-09", title: "Khorasan", parent: "eqIR" },
    { id: "eqIR-10", title: "Khuzestan", parent: "eqIR" },
    {
        id: "eqIR-18",
        title: "Kohkiluyeh va Buyer A?madi",
        parent: "eqIR"
    },
    { id: "eqIR-16", title: "Kordestan", parent: "eqIR" },
    { id: "eqIR-20", title: "Lorestan", parent: "eqIR" },
    { id: "eqIR-22", title: "Markazi", parent: "eqIR" },
    { id: "eqIR-21", title: "Mazandaran", parent: "eqIR" },
    { id: "eqIR-26", title: "Qom", parent: "eqIR" },
    { id: "eqIR-12", title: "Semnan", parent: "eqIR" },
    {
        id: "eqIR-13",
        title: "Sistan va Baluchestan",
        parent: "eqIR"
    },
    { id: "eqIR-07", title: "Tehran", parent: "eqIR" },
    { id: "eqIR-25", title: "Yazd", parent: "eqIR" },
    { id: "eqIR-11", title: "Zanjan", parent: "eqIR" },
    { id: "eqIQ", title: "Iraq", parent: null },
    { id: "eqIQ-AN", title: "Al Anbar", parent: "eqIQ" },
    { id: "eqIQ-BA", title: "Al Basrah", parent: "eqIQ" },
    { id: "eqIQ-MU", title: "Al Muthanná", parent: "eqIQ" },
    { id: "eqIQ-QA", title: "Al Qadisiyah", parent: "eqIQ" },
    { id: "eqIQ-NA", title: "An Najaf", parent: "eqIQ" },
    { id: "eqIQ-AR", title: "Arbil", parent: "eqIQ" },
    { id: "eqIQ-SU", title: "As Sulaymaniyah", parent: "eqIQ" },
    { id: "eqIQ-TS", title: "At Ta'mim", parent: "eqIQ" },
    { id: "eqIQ-BB", title: "Babil", parent: "eqIQ" },
    { id: "eqIQ-BG", title: "Baghdad", parent: "eqIQ" },
    { id: "eqIQ-DA", title: "Dahuk", parent: "eqIQ" },
    { id: "eqIQ-DQ", title: "Dhi Qar", parent: "eqIQ" },
    { id: "eqIQ-DI", title: "Diyalá", parent: "eqIQ" },
    { id: "eqIQ-KA", title: "Karbala'", parent: "eqIQ" },
    { id: "eqIQ-MA", title: "Maysan", parent: "eqIQ" },
    { id: "eqIQ-NI", title: "Ninawá", parent: "eqIQ" },
    { id: "eqIQ-SD", title: "Sala? ad Din", parent: "eqIQ" },
    { id: "eqIQ-WA", title: "Wasit", parent: "eqIQ" },
    { id: "eqIE", title: "Ireland", parent: null },
    {
        id: "eqIE-CP",
        title: "Connaught (Connacht)",
        parent: "eqIE"
    },
    {
        id: "eqIE-G",
        title: "Galway (Gaillimh)",
        parent: "eqIE-CP"
    },
    {
        id: "eqIE-LM",
        title: "Leitrim (Liatroim)",
        parent: "eqIE-CP"
    },
    {
        id: "eqIE-MO",
        title: "Mayo (Maigh Eo)",
        parent: "eqIE-CP"
    },
    {
        id: "eqIE-RN",
        title: "Roscommon (Ros Comáin)",
        parent: "eqIE-CP"
    },
    {
        id: "eqIE-SO",
        title: "Sligo (Sligeach)",
        parent: "eqIE-CP"
    },
    {
        id: "eqIE-LP",
        title: "Leinster (Laighin)",
        parent: "eqIE"
    },
    {
        id: "eqIE-CW",
        title: "Carlow (Ceatharlach)",
        parent: "eqIE-LP"
    },
    {
        id: "eqIE-D",
        title: "Dublin (Baile Átha Cliath)",
        parent: "eqIE-LP"
    },
    {
        id: "eqIE-KE",
        title: "Kildare (Cill Dara)",
        parent: "eqIE-LP"
    },
    {
        id: "eqIE-KK",
        title: "Kilkenny (Cill Chainnigh)",
        parent: "eqIE-LP"
    },
    { id: "eqIE-LS", title: "Laois (Laois)", parent: "eqIE-LP" },
    {
        id: "eqIE-LD",
        title: "Longford (An Longfort)",
        parent: "eqIE-LP"
    },
    { id: "eqIE-LH", title: "Louth (Lú)", parent: "eqIE-LP" },
    {
        id: "eqIE-MH",
        title: "Meath (An Mhí)",
        parent: "eqIE-LP"
    },
    {
        id: "eqIE-OY",
        title: "Offaly (Uíbh Fhailí)",
        parent: "eqIE-LP"
    },
    {
        id: "eqIE-WH",
        title: "Westmeath (An Iarmhí)",
        parent: "eqIE-LP"
    },
    {
        id: "eqIE-WX",
        title: "Wexford (Loch Garman)",
        parent: "eqIE-LP"
    },
    {
        id: "eqIE-WW",
        title: "Wicklow (Cill Mhantáin)",
        parent: "eqIE-LP"
    },
    {
        id: "eqIE-M",
        title: "Munster (An Mhumhain)",
        parent: "eqIE"
    },
    { id: "eqIE-UP", title: "Ulster (Ulaidh)", parent: "eqIE" },
    {
        id: "eqIE-CN",
        title: "Cavan (An Cabhán)",
        parent: "eqIE-UP"
    },
    {
        id: "eqIE-DL",
        title: "Donegal (Dún na nGall)",
        parent: "eqIE-UP"
    },
    {
        id: "eqIE-MN",
        title: "Monaghan (Muineachán)",
        parent: "eqIE-UP"
    },
    { id: "eqIL", title: "Israel", parent: null },
    {
        id: "eqIL-D",
        title: "HaDarom (El Janubi)",
        parent: "eqIL"
    },
    {
        id: "eqIL-M",
        title: "HaMerkaz (El Awsat)",
        parent: "eqIL"
    },
    {
        id: "eqIL-2",
        title: "HaZafon (Esh Shamali)",
        parent: "eqIL"
    },
    { id: "eqIL-HA", title: "Hefa (Heifa)", parent: "eqIL" },
    {
        id: "eqIL-TA",
        title: "Tel-Aviv (Tell Abib)",
        parent: "eqIL"
    },
    {
        id: "eqIL-JM",
        title: "Yerushalayim (Al Quds)",
        parent: "eqIL"
    },
    { id: "eqIT", title: "Italy", parent: null },
    { id: "eqIT-65", title: "Abruzzo", parent: "eqIT" },
    { id: "eqIT-CH", title: "Chieti", parent: "eqIT-65" },
    { id: "eqIT-AQ", title: "L'Aquila", parent: "eqIT-65" },
    { id: "eqIT-PE", title: "Pescara", parent: "eqIT-65" },
    { id: "eqIT-TE", title: "Teramo", parent: "eqIT-65" },
    { id: "eqIT-77", title: "Basilicata", parent: "eqIT" },
    { id: "eqIT-MT", title: "Matera", parent: "eqIT-77" },
    { id: "eqIT-PZ", title: "Potenza", parent: "eqIT-77" },
    { id: "eqIT-78", title: "Calabria", parent: "eqIT" },
    { id: "eqIT-CZ", title: "Catanzaro", parent: "eqIT-78" },
    { id: "eqIT-CS", title: "Cosenza", parent: "eqIT-78" },
    { id: "eqIT-KR", title: "Crotone", parent: "eqIT-78" },
    {
        id: "eqIT-RC",
        title: "Reggio Calabria",
        parent: "eqIT-78"
    },
    { id: "eqIT-W", title: "Vibo Valentia", parent: "eqIT-78" },
    { id: "eqIT-72", title: "Campania", parent: "eqIT" },
    { id: "eqIT-AV", title: "Avellino", parent: "eqIT-72" },
    { id: "eqIT-BN", title: "Benevento", parent: "eqIT-72" },
    { id: "eqIT-CE", title: "Caserta", parent: "eqIT-72" },
    { id: "eqIT-NA", title: "Napoli", parent: "eqIT-72" },
    { id: "eqIT-SA", title: "Salerno", parent: "eqIT-72" },
    { id: "eqIT-45", title: "Emilia-Romagna", parent: "eqIT" },
    { id: "eqIT-BO", title: "Bologna", parent: "eqIT-45" },
    { id: "eqIT-FE", title: "Ferrara", parent: "eqIT-45" },
    { id: "eqIT-FO", title: "Forlì", parent: "eqIT-45" },
    { id: "eqIT-MO", title: "Modena", parent: "eqIT-45" },
    { id: "eqIT-PR", title: "Parma", parent: "eqIT-45" },
    { id: "eqIT-PC", title: "Piacenza", parent: "eqIT-45" },
    { id: "eqIT-RA", title: "Ravenna", parent: "eqIT-45" },
    { id: "eqIT-RE", title: "Reggio Emilia", parent: "eqIT-45" },
    { id: "eqIT-RN", title: "Rimini", parent: "eqIT-45" },
    {
        id: "eqIT-36",
        title: "Friuli-Venezia Giulia",
        parent: "eqIT"
    },
    { id: "eqIT-GO", title: "Gorizia", parent: "eqIT-36" },
    { id: "eqIT-PN", title: "Pordenone", parent: "eqIT-36" },
    { id: "eqIT-TS", title: "Trieste", parent: "eqIT-36" },
    { id: "eqIT-UD", title: "Udine", parent: "eqIT-36" },
    { id: "eqIT-62", title: "Lazio", parent: "eqIT" },
    { id: "eqIT-FR", title: "Frosinone", parent: "eqIT-62" },
    { id: "eqIT-LT", title: "Latina", parent: "eqIT-62" },
    { id: "eqIT-RI", title: "Rieti", parent: "eqIT-62" },
    { id: "eqIT-RM", title: "Roma", parent: "eqIT-62" },
    { id: "eqIT-VT", title: "Viterbo", parent: "eqIT-62" },
    { id: "eqIT-42", title: "Liguria", parent: "eqIT" },
    { id: "eqIT-GE", title: "Genova", parent: "eqIT-42" },
    { id: "eqIT-IM", title: "Imperia", parent: "eqIT-42" },
    { id: "eqIT-SP", title: "La Spezia", parent: "eqIT-42" },
    { id: "eqIT-SV", title: "Savona", parent: "eqIT-42" },
    { id: "eqIT-25", title: "Lombardia", parent: "eqIT" },
    { id: "eqIT-BG", title: "Bergamo", parent: "eqIT-25" },
    { id: "eqIT-BS", title: "Brescia", parent: "eqIT-25" },
    { id: "eqIT-CO", title: "Como", parent: "eqIT-25" },
    { id: "eqIT-CR", title: "Cremona", parent: "eqIT-25" },
    { id: "eqIT-LC", title: "Lecco", parent: "eqIT-25" },
    { id: "eqIT-LO", title: "Lodi", parent: "eqIT-25" },
    { id: "eqIT-MN", title: "Mantova", parent: "eqIT-25" },
    { id: "eqIT-MI", title: "Milano", parent: "eqIT-25" },
    { id: "eqIT-PV", title: "Pavia", parent: "eqIT-25" },
    { id: "eqIT-SO", title: "Sondrio", parent: "eqIT-25" },
    { id: "eqIT-VA", title: "Varese", parent: "eqIT-25" },
    { id: "eqIT-57", title: "Marche", parent: "eqIT" },
    { id: "eqIT-AN", title: "Ancona", parent: "eqIT-57" },
    { id: "eqIT-AP", title: "Ascoli Piceno", parent: "eqIT-57" },
    { id: "eqIT-MC", title: "Macerata", parent: "eqIT-57" },
    { id: "eqIT-PS", title: "Pesaro", parent: "eqIT-57" },
    { id: "eqIT-67", title: "Molise", parent: "eqIT" },
    { id: "eqIT-CB", title: "Campobasso", parent: "eqIT-67" },
    { id: "eqIT-IS", title: "Isernia", parent: "eqIT-67" },
    { id: "eqIT-21", title: "Piemonte", parent: "eqIT" },
    { id: "eqIT-AL", title: "Alessandria", parent: "eqIT-21" },
    { id: "eqIT-AT", title: "Asti", parent: "eqIT-21" },
    { id: "eqIT-BI", title: "Biella", parent: "eqIT-21" },
    { id: "eqIT-CN", title: "Cuneo", parent: "eqIT-21" },
    { id: "eqIT-NO", title: "Novara", parent: "eqIT-21" },
    { id: "eqIT-TO", title: "Torino", parent: "eqIT-21" },
    {
        id: "eqIT-VB",
        title: "Verbano-Cusio-Ossola",
        parent: "eqIT-21"
    },
    { id: "eqIT-VC", title: "Vercelli", parent: "eqIT-21" },
    { id: "eqIT-75", title: "Puglia", parent: "eqIT" },
    { id: "eqIT-BA", title: "Bari", parent: "eqIT-75" },
    { id: "eqIT-BR", title: "Brindisi", parent: "eqIT-75" },
    { id: "eqIT-FG", title: "Foggia", parent: "eqIT-75" },
    { id: "eqIT-LE", title: "Lecce", parent: "eqIT-75" },
    { id: "eqIT-TA", title: "Taranto", parent: "eqIT-75" },
    { id: "eqIT-88", title: "Sardegna", parent: "eqIT" },
    { id: "eqIT-CA", title: "Cagliari", parent: "eqIT-88" },
    { id: "eqIT-NU", title: "Nuoro", parent: "eqIT-88" },
    { id: "eqIT-OR", title: "Oristano", parent: "eqIT-88" },
    { id: "eqIT-SS", title: "Sassari", parent: "eqIT-88" },
    { id: "eqIT-82", title: "Sicilia", parent: "eqIT" },
    { id: "eqIT-AG", title: "Agrigento", parent: "eqIT-82" },
    { id: "eqIT-CL", title: "Caltanissetta", parent: "eqIT-82" },
    { id: "eqIT-CT", title: "Catania", parent: "eqIT-82" },
    { id: "eqIT-EN", title: "Enna", parent: "eqIT-82" },
    { id: "eqIT-ME", title: "Mesaina", parent: "eqIT-82" },
    { id: "eqIT-PA", title: "Palermo", parent: "eqIT-82" },
    { id: "eqIT-RG", title: "Ragusa", parent: "eqIT-82" },
    { id: "eqIT-SR", title: "Siracusa", parent: "eqIT-82" },
    { id: "eqIT-TP", title: "Trapani", parent: "eqIT-82" },
    { id: "eqIT-52", title: "Toscana", parent: "eqIT" },
    { id: "eqIT-AR", title: "Arezzo", parent: "eqIT-52" },
    { id: "eqIT-FI", title: "Firenze", parent: "eqIT-52" },
    { id: "eqIT-GR", title: "Grosseto", parent: "eqIT-52" },
    { id: "eqIT-LI", title: "Livorno", parent: "eqIT-52" },
    { id: "eqIT-LU", title: "Lucca", parent: "eqIT-52" },
    { id: "eqIT-MS", title: "Massa", parent: "eqIT-52" },
    { id: "eqIT-PI", title: "Pisa", parent: "eqIT-52" },
    { id: "eqIT-PT", title: "Pistoia", parent: "eqIT-52" },
    { id: "eqIT-PO", title: "Prato", parent: "eqIT-52" },
    { id: "eqIT-SI", title: "Siena", parent: "eqIT-52" },
    {
        id: "eqIT-32",
        title: "Trentino-Alte Adige (Trentino-Südtirol)",
        parent: "eqIT"
    },
    {
        id: "eqIT-BZ",
        title: "Bolzano (Bozen)",
        parent: "eqIT-32"
    },
    { id: "eqIT-TN", title: "Trento", parent: "eqIT-32" },
    { id: "eqIT-55", title: "Umbria", parent: "eqIT" },
    { id: "eqIT-PG", title: "Perugia", parent: "eqIT-55" },
    { id: "eqIT-TR", title: "Terni", parent: "eqIT-55" },
    {
        id: "eqIT-23",
        title: "Valle d'Aosta (Vallée d'Aoste)",
        parent: "eqIT"
    },
    { id: "eqIT-AO", title: "Aosta (Aoste)", parent: "eqIT-23" },
    { id: "eqIT-34", title: "Veneto", parent: "eqIT" },
    { id: "eqIT-BL", title: "Belluno", parent: "eqIT-34" },
    { id: "eqIT-PD", title: "Padova", parent: "eqIT-34" },
    { id: "eqIT-RO", title: "Rovigo", parent: "eqIT-34" },
    { id: "eqIT-TV", title: "Treviso", parent: "eqIT-34" },
    { id: "eqIT-VE", title: "Venezia", parent: "eqIT-34" },
    { id: "eqIT-VR", title: "Verona", parent: "eqIT-34" },
    { id: "eqIT-VI", title: "Vicenza", parent: "eqIT-34" },
    { id: "eqJM", title: "Jamaica", parent: null },
    { id: "eqJM-13", title: "Clarendon", parent: "eqJM" },
    { id: "eqJM-09", title: "Hanover", parent: "eqJM" },
    { id: "eqJM-01", title: "Kingston", parent: "eqJM" },
    { id: "eqJM-12", title: "Manchester", parent: "eqJM" },
    { id: "eqJM-04", title: "Portland", parent: "eqJM" },
    { id: "eqJM-02", title: "Saint Andrew", parent: "eqJM" },
    { id: "eqJM-06", title: "Saint Ann", parent: "eqJM" },
    { id: "eqJM-14", title: "Saint Catherine", parent: "eqJM" },
    { id: "eqJM-11", title: "Saint Elizabeth", parent: "eqJM" },
    { id: "eqJM-08", title: "Saint James", parent: "eqJM" },
    { id: "eqJM-05", title: "Saint Mary", parent: "eqJM" },
    { id: "eqJM-03", title: "Saint Thomas", parent: "eqJM" },
    { id: "eqJM-07", title: "Trelawny", parent: "eqJM" },
    { id: "eqJM-10", title: "Westmoreland", parent: "eqJM" },
    { id: "eqJP", title: "Japan", parent: null },
    { id: "eqJP-23", title: "Aiti [Aichi]", parent: "eqJP" },
    { id: "eqJP-05", title: "Akita", parent: "eqJP" },
    { id: "eqJP-02", title: "Aomori", parent: "eqJP" },
    { id: "eqJP-38", title: "Ehime", parent: "eqJP" },
    { id: "eqJP-21", title: "Gihu [Gifu]", parent: "eqJP" },
    { id: "eqJP-10", title: "Gunma", parent: "eqJP" },
    {
        id: "eqJP-34",
        title: "Hirosima [Hiroshima]",
        parent: "eqJP"
    },
    {
        id: "eqJP-01",
        title: "Hokkaidô [Hokkaido]",
        parent: "eqJP"
    },
    { id: "eqJP-18", title: "Hukui [Fukui]", parent: "eqJP" },
    {
        id: "eqJP-40",
        title: "Hukuoka [Fukuoka]",
        parent: "eqJP"
    },
    {
        id: "eqJP-07",
        title: "Hukusima [Fukushima]",
        parent: "eqJP"
    },
    { id: "eqJP-28", title: "Hyôgo [Hyogo]", parent: "eqJP" },
    { id: "eqJP-08", title: "Ibaraki", parent: "eqJP" },
    {
        id: "eqJP-17",
        title: "Isikawa [Ishikawa]",
        parent: "eqJP"
    },
    { id: "eqJP-03", title: "Iwate", parent: "eqJP" },
    { id: "eqJP-37", title: "Kagawa", parent: "eqJP" },
    {
        id: "eqJP-46",
        title: "Kagosima [Kagoshima]",
        parent: "eqJP"
    },
    { id: "eqJP-14", title: "Kanagawa", parent: "eqJP" },
    { id: "eqJP-39", title: "Kôti [Kochi]", parent: "eqJP" },
    { id: "eqJP-43", title: "Kumamoto", parent: "eqJP" },
    { id: "eqJP-26", title: "Kyôto [Kyoto]", parent: "eqJP" },
    { id: "eqJP-24", title: "Mie", parent: "eqJP" },
    { id: "eqJP-04", title: "Miyagi", parent: "eqJP" },
    { id: "eqJP-45", title: "Miyazaki", parent: "eqJP" },
    { id: "eqJP-20", title: "Nagano", parent: "eqJP" },
    { id: "eqJP-42", title: "Nagasaki", parent: "eqJP" },
    { id: "eqJP-29", title: "Nara", parent: "eqJP" },
    { id: "eqJP-15", title: "Niigata", parent: "eqJP" },
    { id: "eqJP-44", title: "Ôita [Oita]", parent: "eqJP" },
    { id: "eqJP-33", title: "Okayama", parent: "eqJP" },
    { id: "eqJP-47", title: "Okinawa", parent: "eqJP" },
    { id: "eqJP-27", title: "Ôsaka [Osaka]", parent: "eqJP" },
    { id: "eqJP-41", title: "Saga", parent: "eqJP" },
    { id: "eqJP-11", title: "Saitama", parent: "eqJP" },
    { id: "eqJP-25", title: "Siga [Shiga]", parent: "eqJP" },
    {
        id: "eqJP-22",
        title: "Sizuoka [Shizuoka]",
        parent: "eqJP"
    },
    { id: "eqJP-12", title: "Tiba [Chiba]", parent: "eqJP" },
    { id: "eqJP-09", title: "Totigi [Tochigi]", parent: "eqJP" },
    {
        id: "eqJP-36",
        title: "Tokusima [Tokushima]",
        parent: "eqJP"
    },
    { id: "eqJP-13", title: "Tôkyô [Tokyo]", parent: "eqJP" },
    { id: "eqJP-31", title: "Tottori", parent: "eqJP" },
    { id: "eqJP-16", title: "Toyama", parent: "eqJP" },
    { id: "eqJP-30", title: "Wakayama", parent: "eqJP" },
    { id: "eqJP-06", title: "Yamagata", parent: "eqJP" },
    {
        id: "eqJP-35",
        title: "Yamaguti [Yamaguchi]",
        parent: "eqJP"
    },
    {
        id: "eqJP-19",
        title: "Yamanasi [Yamanashi]",
        parent: "eqJP"
    },
    { id: "eqJO", title: "Jordan", parent: null },
    { id: "eqJO-AJ", title: "‘Ajlun", parent: "eqJO" },
    { id: "eqJO-AQ", title: "Al 'Aqaba", parent: "eqJO" },
    { id: "eqJO-BA", title: "Al Balqa'", parent: "eqJO" },
    { id: "eqJO-KA", title: "Al Karak", parent: "eqJO" },
    { id: "eqJO-MA", title: "Al Mafraq", parent: "eqJO" },
    { id: "eqJO-AM", title: "‘Amman", parent: "eqJO" },
    { id: "eqJO-AT", title: "At Tafilah", parent: "eqJO" },
    { id: "eqJO-AZ", title: "Az Zarqa'", parent: "eqJO" },
    { id: "eqJO-IR", title: "Irbid", parent: "eqJO" },
    { id: "eqJO-JA", title: "Jarash", parent: "eqJO" },
    { id: "eqJO-MN", title: "Ma‘an", parent: "eqJO" },
    { id: "eqJO-MD", title: "Madaba", parent: "eqJO" },
    { id: "eqKZ", title: "Kazakhstan", parent: null },
    { id: "eqKZ-ALA", title: "Almaty", parent: "eqKZ" },
    {
        id: "eqKZ-BAY",
        title: "Bayqonyr (Baykonyr)",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-ALM",
        title: "Almaty oblysy (Almatinskaya oblast')",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-AKM",
        title: "Aqmola oblysy (Akmolinskaya oblast')",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-AKT",
        title: "Aqtöbe oblysy (Aktyubinskaya oblast')",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-ATY",
        title: "Atyraü oblysy (Atyrauskaya oblast')",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-ZAP",
        title: "Batys Kazakstan oblysy (Zapadno-Kazakhstanskaya oblast')",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-MAN",
        title: "Mangghystau oblysy (Mangystauskaya oblast')",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-YUZ",
        title: "Ongtüstik Kazakstan oblysy (Yuzhno-Kazakhstanskaya oblast')",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-PAV",
        title: "Pavlodar oblysy (Pavlodarskaya oblast')",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-KAR",
        title: "Qaraghandy oblysy (Karagandinskaya oblast')",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-KUS",
        title: "Qostanay oblysy (Kustanayskaya oblast')",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-KZY",
        title: "Qyzylorda oblysy (Kzylordinskaya oblast')",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-VOS",
        title: "Shyghys Kazakstan oblysy (Vostochno-Kazakhstanskaya oblast')",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-SEV",
        title: "Soltüstik Kazakstan oblysy (Severo-Kazakhstanskaya oblast')",
        parent: "eqKZ"
    },
    {
        id: "eqKZ-ZHA",
        title: "Zhambyl oblysy (Zhambylskaya Oblast')",
        parent: "eqKZ"
    },
    { id: "eqKE", title: "Kenya", parent: null },
    {
        id: "eqKE-110",
        title: "Nairobi Municipality",
        parent: "eqKE"
    },
    { id: "eqKE-200", title: "Central (Kati)", parent: "eqKE" },
    { id: "eqKE-300", title: "Coast (Pwani)", parent: "eqKE" },
    {
        id: "eqKE-400",
        title: "Eastern (Mashariki)",
        parent: "eqKE"
    },
    {
        id: "eqKE-500",
        title: "North-Eastern (Kaskazini Mashariki)",
        parent: "eqKE"
    },
    { id: "eqKE-600", title: "Nyanza", parent: "eqKE" },
    { id: "eqKE-700", title: "Rift Valley", parent: "eqKE" },
    {
        id: "eqKE-900",
        title: "Western (Magharibi)",
        parent: "eqKE"
    },
    { id: "eqKI", title: "Kiribati", parent: null },
    { id: "eqKI-G", title: "Gilbert Islands", parent: "eqKI" },
    { id: "eqKI-L", title: "Line Islands", parent: "eqKI" },
    { id: "eqKI-P", title: "Phoenix Islands", parent: "eqKI" },
    { id: "eqKP", title: "Korea (North)", parent: null },
    { id: "eqKP-KAE", title: "Kaesong-si", parent: "eqKP" },
    { id: "eqKP-NAM", title: "Nampo-si", parent: "eqKP" },
    { id: "eqKP-PYO", title: "Pyongyang-si", parent: "eqKP" },
    { id: "eqKP-CHA", title: "Chagang-do", parent: "eqKP" },
    { id: "eqKP-HAB", title: "Hamgyongbuk-do", parent: "eqKP" },
    { id: "eqKP-HAN", title: "Hamgyongnam-do", parent: "eqKP" },
    { id: "eqKP-HWB", title: "Hwanghaebuk-do", parent: "eqKP" },
    { id: "eqKP-HWN", title: "Hwanghaenam-do", parent: "eqKP" },
    { id: "eqKP-KAN", title: "Kangwon-do", parent: "eqKP" },
    { id: "eqKP-PYB", title: "Pyonganbuk-do", parent: "eqKP" },
    { id: "eqKP-PYN", title: "Pyongannam-do", parent: "eqKP" },
    { id: "eqKP-YAN", title: "Yanggang-do", parent: "eqKP" },
    { id: "eqKR", title: "Korea (South)", parent: null },
    {
        id: "eqKR-11",
        title: "Seoul Teugbyeolsi [ Seoul-T’ukpyolshi]",
        parent: "eqKR"
    },
    {
        id: "eqKR-26",
        title: "Busan Gwang'yeogsi [Pusan-Kwangyokshi]",
        parent: "eqKR"
    },
    {
        id: "eqKR-27",
        title: "Daegu Gwang'yeogsi [Taegu-Kwangyokshi)",
        parent: "eqKR"
    },
    {
        id: "eqKR-30",
        title: "Daejeon Gwang'yeogsi [Taejon-Kwangyokshi]",
        parent: "eqKR"
    },
    {
        id: "eqKR-29",
        title: "Gwangju Gwang'yeogsi [Kwangju-Kwangyokshi]",
        parent: "eqKR"
    },
    {
        id: "eqKR-28",
        title: "Incheon Gwang'yeogsi [Inchon-Kwangyokshi]",
        parent: "eqKR"
    },
    {
        id: "eqKR-31",
        title: "Ulsan Gwang'yeogsi [Ulsan-Kwangyokshi]",
        parent: "eqKR"
    },
    {
        id: "eqKR-43",
        title: "Chungcheongbugdo [Ch'ungch'ongbuk-do]",
        parent: "eqKR"
    },
    {
        id: "eqKR-44",
        title: "Chungcheongnamdo [Ch'ungch'ongnam-do]",
        parent: "eqKR"
    },
    {
        id: "eqKR-42",
        title: "Gang'weondo [Kang-won-do]",
        parent: "eqKR"
    },
    {
        id: "eqKR-41",
        title: "Gyeonggido [Kyonggi-do]",
        parent: "eqKR"
    },
    {
        id: "eqKR-47",
        title: "Gyeongsangbugdo [Kyongsangbuk-do]",
        parent: "eqKR"
    },
    {
        id: "eqKR-48",
        title: "Gyeongsangnamdo [Kyongsangnam-do]",
        parent: "eqKR"
    },
    {
        id: "eqKR-49",
        title: "Jejudo [Cheju-do]",
        parent: "eqKR"
    },
    {
        id: "eqKR-45",
        title: "Jeonrabugdo [Chollabuk-do)",
        parent: "eqKR"
    },
    {
        id: "eqKR-46",
        title: "Jeonranamdo [Chollanam-do]",
        parent: "eqKR"
    },
    { id: "eqKW", title: "Kuwait", parent: null },
    { id: "eqKW-AH", title: "Al A?madi", parent: "eqKW" },
    { id: "eqKW-FA", title: "Al Farwaniyah", parent: "eqKW" },
    { id: "eqKW-JA", title: "Al Jahrah", parent: "eqKW" },
    { id: "eqKW-KU", title: "Al Kuwayt", parent: "eqKW" },
    { id: "eqKW-HA", title: "?awalli", parent: "eqKW" },
    { id: "eqKG", title: "Kyrgyzstan", parent: null },
    {
        id: "eqKG-C",
        title: "Chu (Chuyskaya oblast')",
        parent: "eqKG"
    },
    {
        id: "eqKG-J",
        title: "Jalal-Abad (Dzhalal-Abadskaya oblast')",
        parent: "eqKG"
    },
    {
        id: "eqKG-N",
        title: "Naryn (Narynskaya Oblast’)",
        parent: "eqKG"
    },
    {
        id: "eqKG-O",
        title: "Osh (Oshskaya oblast')",
        parent: "eqKG"
    },
    {
        id: "eqKG-T",
        title: "Talas (Talasskaya oblast')",
        parent: "eqKG"
    },
    {
        id: "eqKG-Y",
        title: "Ysyk-Köl (Issyk-Kul'skaya oblast')",
        parent: "eqKG"
    },
    { id: "eqLA", title: "Laos", parent: null },
    { id: "eqLA-VT", title: "Vientiane", parent: "eqLA" },
    { id: "eqLA-AT", title: "Attapu [Attopeu]", parent: "eqLA" },
    { id: "eqLA-BK", title: "Bokèo", parent: "eqLA" },
    {
        id: "eqLA-BL",
        title: "Bolikhamxai [Borikhane]",
        parent: "eqLA"
    },
    {
        id: "eqLA-CH",
        title: "Champasak [Champassak]",
        parent: "eqLA"
    },
    { id: "eqLA-HO", title: "Houaphan", parent: "eqLA" },
    { id: "eqLA-KH", title: "Khammouan", parent: "eqLA" },
    { id: "eqLA-LM", title: "Louang Namtha", parent: "eqLA" },
    {
        id: "eqLA-LP",
        title: "Louangphabang [Louang Prabang]",
        parent: "eqLA"
    },
    {
        id: "eqLA-OU",
        title: "Oudômxai [Oudomsai]",
        parent: "eqLA"
    },
    {
        id: "eqLA-PH",
        title: "Phôngsali [Phong Saly]",
        parent: "eqLA"
    },
    {
        id: "eqLA-SL",
        title: "Salavan [Saravane]",
        parent: "eqLA"
    },
    { id: "eqLA-SV", title: "Savannakhét", parent: "eqLA" },
    { id: "eqLA-VI", title: "Vientiane", parent: "eqLA" },
    {
        id: "eqLA-XA",
        title: "Xaignabouli [Sayaboury]",
        parent: "eqLA"
    },
    { id: "eqLA-XE", title: "Xékong [Sékong]", parent: "eqLA" },
    {
        id: "eqLA-XI",
        title: "Xiangkhoang [Xieng Khouang]",
        parent: "eqLA"
    },
    { id: "eqLV", title: "Latvia", parent: null },
    {
        id: "eqLV-AI",
        title: "Aizkraukles Aprinkis",
        parent: "eqLV"
    },
    {
        id: "eqLV-AL",
        title: "Aluksnes Aprinkis",
        parent: "eqLV"
    },
    { id: "eqLV-BL", title: "Balvu Aprinkis", parent: "eqLV" },
    { id: "eqLV-BU", title: "Bauskas Aprinkis", parent: "eqLV" },
    { id: "eqLV-CE", title: "Cesu Aprinkis", parent: "eqLV" },
    {
        id: "eqLV-DA",
        title: "Daugavpils Aprinkis",
        parent: "eqLV"
    },
    { id: "eqLV-DO", title: "Dobeles Aprinkis", parent: "eqLV" },
    {
        id: "eqLV-GU",
        title: "Gulbenes Aprinkis",
        parent: "eqLV"
    },
    {
        id: "eqLV-JL",
        title: "Jelgavas Aprinkis",
        parent: "eqLV"
    },
    {
        id: "eqLV-JK",
        title: "Jekabpils Aprinkis",
        parent: "eqLV"
    },
    {
        id: "eqLV-KR",
        title: "Kraslavas Aprinkis",
        parent: "eqLV"
    },
    {
        id: "eqLV-KU",
        title: "Kuldigas Aprinkis",
        parent: "eqLV"
    },
    { id: "eqLV-LM", title: "Limbažu Aprinkis", parent: "eqLV" },
    {
        id: "eqLV-LE",
        title: "Liepajas Aprinkis",
        parent: "eqLV"
    },
    { id: "eqLV-LU", title: "Ludzas Aprinkis", parent: "eqLV" },
    { id: "eqLV-MA", title: "Madonas Aprinkis", parent: "eqLV" },
    { id: "eqLV-OG", title: "Ogres Aprinkis", parent: "eqLV" },
    { id: "eqLV-PR", title: "Preilu Aprinkis", parent: "eqLV" },
    {
        id: "eqLV-RE",
        title: "Rezeknes Aprinkis",
        parent: "eqLV"
    },
    { id: "eqLV-RI", title: "Rigas Aprinkis", parent: "eqLV" },
    { id: "eqLV-SA", title: "Saldus Aprinkis", parent: "eqLV" },
    { id: "eqLV-TA", title: "Talsu Aprinkis", parent: "eqLV" },
    { id: "eqLV-TU", title: "Tukuma Aprinkis", parent: "eqLV" },
    { id: "eqLV-VK", title: "Valkas Aprinkis", parent: "eqLV" },
    {
        id: "eqLV-VM",
        title: "Valmieras Aprinkis",
        parent: "eqLV"
    },
    {
        id: "eqLV-VE",
        title: "Ventspils Aprinkis",
        parent: "eqLV"
    },
    { id: "eqLV-DGV", title: "Daugavpils", parent: "eqLV" },
    { id: "eqLV-JEL", title: "Jelgava", parent: "eqLV" },
    { id: "eqLV-JUR", title: "Jurmala", parent: "eqLV" },
    { id: "eqLV-LPX", title: "Liepaja", parent: "eqLV" },
    { id: "eqLV-REZ", title: "Rezekne", parent: "eqLV" },
    { id: "eqLV-RIX", title: "Riga", parent: "eqLV" },
    { id: "eqLV-VEN", title: "Ventspils", parent: "eqLV" },
    { id: "eqLB", title: "Lebanon", parent: null },
    { id: "eqLB-BA", title: "Beiroût (Bayrut)", parent: "eqLB" },
    {
        id: "eqLB-BI",
        title: "El Béqaa (Al Biqa')",
        parent: "eqLB"
    },
    {
        id: "eqLB-JL",
        title: "Jabal Loubnâne (Jabal Lubnan)",
        parent: "eqLB"
    },
    {
        id: "eqLB-AS",
        title: "Loubnâne ech Chemâli (Ash Shamal)",
        parent: "eqLB"
    },
    {
        id: "eqLB-JA",
        title: "Loubnâne ej Jnoûbi (Al Janub)",
        parent: "eqLB"
    },
    {
        id: "eqLB-NA",
        title: "Nabatîyé (An Nabatiyah",
        parent: "eqLB"
    },
    { id: "eqLS", title: "Lesotho", parent: null },
    { id: "eqLS-D", title: "Berea", parent: "eqLS" },
    { id: "eqLS-B", title: "Butha-Buthe", parent: "eqLS" },
    { id: "eqLS-C", title: "Leribe", parent: "eqLS" },
    { id: "eqLS-E", title: "Mafeteng", parent: "eqLS" },
    { id: "eqLS-A", title: "Maseru", parent: "eqLS" },
    { id: "eqLS-F", title: "Mohale's Hoek", parent: "eqLS" },
    { id: "eqLS-J", title: "Mokhotlong", parent: "eqLS" },
    { id: "eqLS-H", title: "Qacha's Nek", parent: "eqLS" },
    { id: "eqLS-G", title: "Quthing", parent: "eqLS" },
    { id: "eqLS-K", title: "Thaba-Tseka", parent: "eqLS" },
    { id: "eqLR", title: "Liberia", parent: null },
    { id: "eqLR-BM", title: "Bomi", parent: "eqLR" },
    { id: "eqLR-BG", title: "Bong", parent: "eqLR" },
    { id: "eqLR-GB", title: "Grand Bassa", parent: "eqLR" },
    { id: "eqLR-CM", title: "Grand Cape Mount", parent: "eqLR" },
    { id: "eqLR-GG", title: "Grand Gedeh", parent: "eqLR" },
    { id: "eqLR-GK", title: "Grand Kru", parent: "eqLR" },
    { id: "eqLR-LO", title: "Lofa", parent: "eqLR" },
    { id: "eqLR-MG", title: "Margibi", parent: "eqLR" },
    { id: "eqLR-MY", title: "Maryland", parent: "eqLR" },
    { id: "eqLR-MO", title: "Montserrado", parent: "eqLR" },
    { id: "eqLR-NI", title: "Nimba", parent: "eqLR" },
    { id: "eqLR-RI", title: "Rivercess", parent: "eqLR" },
    { id: "eqLR-SI", title: "Sinoe", parent: "eqLR" },
    { id: "eqLY", title: "Libya", parent: null },
    { id: "eqLY-BU", title: "Al Butnan", parent: "eqLY" },
    {
        id: "eqLY-JA",
        title: "Al Jabal al Akh?ar",
        parent: "eqLY"
    },
    {
        id: "eqLY-JG",
        title: "Al Jabal al Gharbi",
        parent: "eqLY"
    },
    { id: "eqLY-Ju", title: "Al Jufrah", parent: "eqLY" },
    { id: "eqLY-WA", title: "Al Wa?ah", parent: "eqLY" },
    { id: "eqLY-Wu", title: "Al Wustá", parent: "eqLY" },
    { id: "eqLY-ZA", title: "Az Zawiyah", parent: "eqLY" },
    { id: "eqLY-BA", title: "Banghazi", parent: "eqLY" },
    { id: "eqLY-FA", title: "Fazzan", parent: "eqLY" },
    { id: "eqLY-MI", title: "Misratah", parent: "eqLY" },
    { id: "eqLY-NA", title: "Naggaza", parent: "eqLY" },
    { id: "eqLY-SF", title: "Sawfajjin", parent: "eqLY" },
    { id: "eqLY-TB", title: "Tarabulus", parent: "eqLY" },
    { id: "eqLI", title: "Liechtenstein", parent: null },
    { id: "eqLI-LI", title: "Liechtenstein", parent: "eqLI" },
    { id: "eqLT", title: "Lithuania", parent: null },
    {
        id: "eqLT-AL",
        title: "Alytaus Apskritis",
        parent: "eqLT"
    },
    { id: "eqLT-KU", title: "Kauno Apskritis", parent: "eqLT" },
    {
        id: "eqLT-KL",
        title: "Klaipedos Apskritis",
        parent: "eqLT"
    },
    {
        id: "eqLT-MR",
        title: "Marijampoles Apskritis",
        parent: "eqLT"
    },
    {
        id: "eqLT-PN",
        title: "Panevežio Apskritis",
        parent: "eqLT"
    },
    {
        id: "eqLT-SA",
        title: "Šiauliu Apskritis",
        parent: "eqLT"
    },
    {
        id: "eqLT-TA",
        title: "Taurages Apskritis",
        parent: "eqLT"
    },
    { id: "eqLT-TE", title: "Telšiu Apskritis", parent: "eqLT" },
    { id: "eqLT-UT", title: "Utenos Apskritis", parent: "eqLT" },
    {
        id: "eqLT-VL",
        title: "Vilniaus Apskritis",
        parent: "eqLT"
    },
    { id: "eqLU", title: "Luxembourg", parent: null },
    { id: "eqLU-D", title: "Diekirch", parent: "eqLU" },
    { id: "eqLU-G", title: "Grevenmacher", parent: "eqLU" },
    {
        id: "eqLU-L",
        title: "Luxembourg (Luxemburg)",
        parent: "eqLU"
    },
    { id: "eqMO", title: "Macau", parent: null },
    { id: "eqMO-MO", title: "Macau", parent: "eqMO" },
    { id: "eqMK", title: "Macedonia", parent: null },
    { id: "eqMK-MK", title: "Macedonia", parent: "eqMK" },
    { id: "eqMG", title: "Madagascar", parent: null },
    { id: "eqMG-T", title: "Antananarivo", parent: "eqMG" },
    { id: "eqMG-D", title: "Antsiranana", parent: "eqMG" },
    { id: "eqMG-F", title: "Fianarantsoa", parent: "eqMG" },
    { id: "eqMG-M", title: "Mahajanga", parent: "eqMG" },
    { id: "eqMG-A", title: "Toamasina", parent: "eqMG" },
    { id: "eqMG-U", title: "Toliara", parent: "eqMG" },
    { id: "eqMW", title: "Malawi", parent: null },
    { id: "eqMW-C", title: "Central", parent: "eqMW" },
    { id: "eqMW-DE", title: "Dedza", parent: "eqMW-C" },
    { id: "eqMW-DO", title: "Dowa", parent: "eqMW-C" },
    { id: "eqMW-KS", title: "Kasungu", parent: "eqMW-C" },
    { id: "eqMW-LI", title: "Lilongwe", parent: "eqMW-C" },
    { id: "eqMW-MC", title: "Mchinji", parent: "eqMW-C" },
    { id: "eqMW-NK", title: "Nkhotakota", parent: "eqMW-C" },
    { id: "eqMW-NU", title: "Ntcheu", parent: "eqMW-C" },
    { id: "eqMW-NI", title: "Ntchisi", parent: "eqMW-C" },
    { id: "eqMW-SA", title: "Salima", parent: "eqMW-C" },
    { id: "eqMW-N", title: "Northern", parent: "eqMW" },
    { id: "eqMW-CT", title: "Chitipa", parent: "eqMW-N" },
    { id: "eqMW-KR", title: "Karonga", parent: "eqMW-N" },
    { id: "eqMW-MZ", title: "Mzimba", parent: "eqMW-N" },
    { id: "eqMW-NB", title: "Nkhata Bay", parent: "eqMW-N" },
    { id: "eqMW-RU", title: "Rumphi", parent: "eqMW-N" },
    { id: "eqMW-S", title: "Southern", parent: "eqMW" },
    { id: "eqMW-BL", title: "Blantyre", parent: "eqMW-S" },
    { id: "eqMW-CK", title: "Chikwawa", parent: "eqMW-S" },
    { id: "eqMW-CR", title: "Chiradzulu", parent: "eqMW-S" },
    { id: "eqMW-MH", title: "Machinga", parent: "eqMW-S" },
    { id: "eqMW-MG", title: "Mangochi", parent: "eqMW-S" },
    { id: "eqMW-MU", title: "Mulanje", parent: "eqMW-S" },
    { id: "eqMW-MW", title: "Mwanza", parent: "eqMW-S" },
    { id: "eqMW-NS", title: "Nsanje", parent: "eqMW-S" },
    { id: "eqMW-TH", title: "Thyolo", parent: "eqMW-S" },
    { id: "eqMW-ZO", title: "Zomba", parent: "eqMW-S" },
    { id: "eqMY", title: "Malaysia", parent: null },
    {
        id: "eqMY-W",
        title: "Wilayah Persekutuan Kuala Lumpur",
        parent: "eqMY"
    },
    {
        id: "eqMY-L",
        title: "Wilayah Persekutuan Labuan",
        parent: "eqMY"
    },
    { id: "eqMY-J", title: "Johor", parent: "eqMY" },
    { id: "eqMY-K", title: "Kedah", parent: "eqMY" },
    { id: "eqMY-D", title: "Kelantan", parent: "eqMY" },
    { id: "eqMY-M", title: "Melaka", parent: "eqMY" },
    { id: "eqMY-N", title: "Negeri Sembilan", parent: "eqMY" },
    { id: "eqMY-C", title: "Pahang", parent: "eqMY" },
    { id: "eqMY-A", title: "Perak", parent: "eqMY" },
    { id: "eqMY-R", title: "Perlis", parent: "eqMY" },
    { id: "eqMY-P", title: "Pulau Pinang", parent: "eqMY" },
    { id: "eqMY-SA", title: "Sabah", parent: "eqMY" },
    { id: "eqMY-SK", title: "Sarawak", parent: "eqMY" },
    { id: "eqMY-B", title: "Selangor", parent: "eqMY" },
    { id: "eqMY-T", title: "Terengganu", parent: "eqMY" },
    { id: "eqMV", title: "Maldives", parent: null },
    { id: "eqMV-MLE", title: "Male", parent: "eqMV" },
    { id: "eqMV-02", title: "Alif", parent: "eqMV" },
    { id: "eqMV-20", title: "Baa", parent: "eqMV" },
    { id: "eqMV-17", title: "Dhaalu", parent: "eqMV" },
    { id: "eqMV-14", title: "Faafu", parent: "eqMV" },
    { id: "eqMV-27", title: "Gaaf Alif", parent: "eqMV" },
    { id: "eqMV-28", title: "Gaafu Dhaalu", parent: "eqMV" },
    { id: "eqMV-29", title: "Gnaviyani", parent: "eqMV" },
    { id: "eqMV-07", title: "Haa Alif", parent: "eqMV" },
    { id: "eqMV-23", title: "Haa Dhaalu", parent: "eqMV" },
    { id: "eqMV-26", title: "Kaafu", parent: "eqMV" },
    { id: "eqMV-05", title: "Laamu", parent: "eqMV" },
    { id: "eqMV-03", title: "Lhaviyani", parent: "eqMV" },
    { id: "eqMV-12", title: "Meemu", parent: "eqMV" },
    { id: "eqMV-25", title: "Noonu", parent: "eqMV" },
    { id: "eqMV-13", title: "Raa", parent: "eqMV" },
    { id: "eqMV-01", title: "Seenu", parent: "eqMV" },
    { id: "eqMV-24", title: "Shaviyani", parent: "eqMV" },
    { id: "eqMV-08", title: "Thaa", parent: "eqMV" },
    { id: "eqMV-04", title: "Vaavu", parent: "eqMV" },
    { id: "eqML", title: "Mali", parent: null },
    { id: "eqML-BKO", title: "Bamako", parent: "eqML" },
    { id: "eqML-7", title: "Gao", parent: "eqML" },
    { id: "eqML-1", title: "Kayes", parent: "eqML" },
    { id: "eqML-8", title: "Kidal", parent: "eqML" },
    { id: "eqML-2", title: "Koulikoro", parent: "eqML" },
    { id: "eqML-5", title: "Mopti", parent: "eqML" },
    { id: "eqML-4", title: "Ségou", parent: "eqML" },
    { id: "eqML-3", title: "Sikasso", parent: "eqML" },
    { id: "eqML-6", title: "Tombouctou", parent: "eqML" },
    { id: "eqMT", title: "Malta", parent: null },
    { id: "eqMT-MT", title: "Malta", parent: "eqMT" },
    { id: "eqMH", title: "Marshall Islands", parent: null },
    { id: "eqMH-L", title: "Ralik chain", parent: "eqMH" },
    { id: "eqMH-ALL", title: "Ailinglapalap", parent: "eqMH-L" },
    { id: "eqMH-EBO", title: "Ebon", parent: "eqMH-L" },
    { id: "eqMH-ENI", title: "Eniwetok", parent: "eqMH-L" },
    { id: "eqMH-JAL", title: "Jaluit", parent: "eqMH-L" },
    { id: "eqMH-KIL", title: "Kili", parent: "eqMH-L" },
    { id: "eqMH-KWA", title: "Kwajalein", parent: "eqMH-L" },
    { id: "eqMH-LAE", title: "Lae", parent: "eqMH-L" },
    { id: "eqMH-LIB", title: "Lib", parent: "eqMH-L" },
    { id: "eqMH-NMK", title: "Namorik", parent: "eqMH-L" },
    { id: "eqMH-NMU", title: "Namu", parent: "eqMH-L" },
    { id: "eqMH-RON", title: "Rongelap", parent: "eqMH-L" },
    { id: "eqMH-UJA", title: "Ujae", parent: "eqMH-L" },
    { id: "eqMH-UJL", title: "Ujelang", parent: "eqMH-L" },
    { id: "eqMH-WTH", title: "Wotho", parent: "eqMH-L" },
    { id: "eqMH-T", title: "Ratak chain", parent: "eqMH" },
    { id: "eqMH-ALK", title: "Ailuk", parent: "eqMH-T" },
    { id: "eqMH-ARN", title: "Arno", parent: "eqMH-T" },
    { id: "eqMH-AUR", title: "Aur", parent: "eqMH-T" },
    { id: "eqMH-LIK", title: "Likiep", parent: "eqMH-T" },
    { id: "eqMH-MAJ", title: "Majuro", parent: "eqMH-T" },
    { id: "eqMH-MAL", title: "Maloelap", parent: "eqMH-T" },
    { id: "eqMH-MEJ", title: "Mejit", parent: "eqMH-T" },
    { id: "eqMH-MIL", title: "Mili", parent: "eqMH-T" },
    { id: "eqMH-UTI", title: "Utirik", parent: "eqMH-T" },
    { id: "eqMH-WTJ", title: "Wotje", parent: "eqMH-T" },
    { id: "eqMQ", title: "Martinique", parent: null },
    { id: "eqMQ-MQ", title: "Martinique", parent: "eqMQ" },
    { id: "eqMR", title: "Mauritania", parent: null },
    { id: "eqMR-NKC", title: "Nouakchott", parent: "eqMR" },
    { id: "eqMR-07", title: "Adrar", parent: "eqMR" },
    { id: "eqMR-03", title: "Assaba", parent: "eqMR" },
    { id: "eqMR-05", title: "Brakna", parent: "eqMR" },
    {
        id: "eqMR-08",
        title: "Dakhlet Nouadhibou",
        parent: "eqMR"
    },
    { id: "eqMR-04", title: "Gorgol", parent: "eqMR" },
    { id: "eqMR-10", title: "Guidimaka", parent: "eqMR" },
    { id: "eqMR-01", title: "Hodh ech Chargui", parent: "eqMR" },
    { id: "eqMR-02", title: "Hodh el Gharbi", parent: "eqMR" },
    { id: "eqMR-12", title: "Inchiri", parent: "eqMR" },
    { id: "eqMR-09", title: "Tagant", parent: "eqMR" },
    { id: "eqMR-11", title: "Tiris Zemmour", parent: "eqMR" },
    { id: "eqMR-06", title: "Trarza", parent: "eqMR" },
    { id: "eqMU", title: "Mauritius", parent: null },
    {
        id: "eqMU-BR",
        title: "Beau Bassin-Rose Hill",
        parent: "eqMU"
    },
    { id: "eqMU-CU", title: "Curepipe", parent: "eqMU" },
    { id: "eqMU-PL", title: "Port Louis", parent: "eqMU" },
    { id: "eqMU-QB", title: "Quatre Bornes", parent: "eqMU" },
    { id: "eqMU-VP", title: "Vacoas-Phoenix", parent: "eqMU" },
    { id: "eqMU-BL", title: "Black River", parent: "eqMU" },
    { id: "eqMU-FL", title: "Flacq", parent: "eqMU" },
    { id: "eqMU-GP", title: "Grand Port", parent: "eqMU" },
    { id: "eqMU-MO", title: "Moka", parent: "eqMU" },
    { id: "eqMU-PA", title: "Pamplemousses", parent: "eqMU" },
    { id: "eqMU-PW", title: "Plaines Wilhems", parent: "eqMU" },
    {
        id: "eqMU-RR",
        title: "Rivière du Rempart",
        parent: "eqMU"
    },
    { id: "eqMU-SA", title: "Savanne", parent: "eqMU" },
    { id: "eqMU-AG", title: "Agalega Islands", parent: "eqMU" },
    {
        id: "eqMU-CC",
        title: "Cargados Carajos Shoals [Saint Brandon Islands]",
        parent: "eqMU"
    },
    { id: "eqMU-RO", title: "Rodrigues Island", parent: "eqMU" },
    { id: "eqYT", title: "Mayotte", parent: null },
    { id: "eqYT-YT", title: "Mayotte", parent: "eqYT" },
    { id: "eqMX", title: "Mexico", parent: null },
    {
        id: "eqMX-DIF",
        title: "Distrito Federal",
        parent: "eqMX"
    },
    { id: "eqMX-AGU", title: "Aguascalientes", parent: "eqMX" },
    { id: "eqMX-BCN", title: "Baja California", parent: "eqMX" },
    {
        id: "eqMX-BCS",
        title: "Baja California Sur",
        parent: "eqMX"
    },
    { id: "eqMX-CAM", title: "Campeche", parent: "eqMX" },
    { id: "eqMX-COA", title: "Coahuila", parent: "eqMX" },
    { id: "eqMX-COL", title: "Colima", parent: "eqMX" },
    { id: "eqMX-CHP", title: "Chiapas", parent: "eqMX" },
    { id: "eqMX-CHH", title: "Chihuahua", parent: "eqMX" },
    { id: "eqMX-DUR", title: "Durango", parent: "eqMX" },
    { id: "eqMX-GRO", title: "Guerrero", parent: "eqMX" },
    { id: "eqMX-GUA", title: "Guanajuato", parent: "eqMX" },
    { id: "eqMX-HID", title: "Hidalgo", parent: "eqMX" },
    { id: "eqMX-JAL", title: "Jalisco", parent: "eqMX" },
    { id: "eqMX-MEX", title: "México", parent: "eqMX" },
    { id: "eqMX-MIC", title: "Michoacán", parent: "eqMX" },
    { id: "eqMX-MOR", title: "Morelos", parent: "eqMX" },
    { id: "eqMX-NAY", title: "Nayarit", parent: "eqMX" },
    { id: "eqMX-NLE", title: "Nuevo León", parent: "eqMX" },
    { id: "eqMX-OAX", title: "Oaxaca", parent: "eqMX" },
    { id: "eqMX-PUE", title: "Puebla", parent: "eqMX" },
    { id: "eqMX-QUE", title: "Queretaro", parent: "eqMX" },
    { id: "eqMX-ROO", title: "Quintana Roo", parent: "eqMX" },
    { id: "eqMX-SLP", title: "San Luis Potosí", parent: "eqMX" },
    { id: "eqMX-SIN", title: "Sinaloa", parent: "eqMX" },
    { id: "eqMX-SON", title: "Sonora", parent: "eqMX" },
    { id: "eqMX-TAB", title: "Tabasco", parent: "eqMX" },
    { id: "eqMX-TAM", title: "Tamaulipas", parent: "eqMX" },
    { id: "eqMX-TLA", title: "Tlaxcala", parent: "eqMX" },
    { id: "eqMX-VER", title: "Veracruz", parent: "eqMX" },
    { id: "eqMX-YUC", title: "Yucatán", parent: "eqMX" },
    { id: "eqMX-ZAC", title: "Zacatecas", parent: "eqMX" },
    { id: "eqFM", title: "Micronesia", parent: null },
    { id: "eqFM-TRK", title: "chuuk", parent: "eqFM" },
    { id: "eqFM-KSA", title: "Kosrae", parent: "eqFM" },
    { id: "eqFM-PNI", title: "Pohnpei", parent: "eqFM" },
    { id: "eqFM-YAP", title: "Yap", parent: "eqFM" },
    { id: "eqMD", title: "Moldova", parent: null },
    { id: "eqMD-BAL", title: "Balti", parent: "eqMD" },
    { id: "eqMD-CAH", title: "Cahul", parent: "eqMD" },
    { id: "eqMD-CHI", title: "Chisinau", parent: "eqMD" },
    { id: "eqMD-DUB", title: "Dubasari", parent: "eqMD" },
    { id: "eqMD-ORH", title: "Orhei", parent: "eqMD" },
    { id: "eqMD-RIB", title: "Rîbnita", parent: "eqMD" },
    { id: "eqMD-SOC", title: "Soroca", parent: "eqMD" },
    { id: "eqMD-TIG", title: "Tighina", parent: "eqMD" },
    { id: "eqMD-TIR", title: "Tiraspol", parent: "eqMD" },
    { id: "eqMD-UNG", title: "Ungheni", parent: "eqMD" },
    { id: "eqMD-ANE", title: "Anenii Noi", parent: "eqMD" },
    { id: "eqMD-BAS", title: "Basarabeasca", parent: "eqMD" },
    { id: "eqMD-BRI", title: "Brinceni", parent: "eqMD" },
    { id: "eqMD-CHL", title: "Cahul", parent: "eqMD" },
    { id: "eqMD-CAM", title: "Camenca", parent: "eqMD" },
    { id: "eqMD-CAN", title: "Cantemir", parent: "eqMD" },
    { id: "eqMD-CAI", title: "Cainari", parent: "eqMD" },
    { id: "eqMD-CAL", title: "Calarasi", parent: "eqMD" },
    { id: "eqMD-CAS", title: "Causeni", parent: "eqMD" },
    { id: "eqMD-CIA", title: "Ciadîr-Lunga", parent: "eqMD" },
    { id: "eqMD-CIM", title: "Cimislia", parent: "eqMD" },
    { id: "eqMD-COM", title: "Comrat", parent: "eqMD" },
    { id: "eqMD-CRI", title: "Criuleni", parent: "eqMD" },
    { id: "eqMD-DON", title: "Donduseni", parent: "eqMD" },
    { id: "eqMD-DRO", title: "Drochia", parent: "eqMD" },
    { id: "eqMD-DBI", title: "Dubasari", parent: "eqMD" },
    { id: "eqMD-EDI", title: "Edinet", parent: "eqMD" },
    { id: "eqMD-FAL", title: "Falesti", parent: "eqMD" },
    { id: "eqMD-FLO", title: "Floresti", parent: "eqMD" },
    { id: "eqMD-GLO", title: "Glodeni", parent: "eqMD" },
    { id: "eqMD-GRI", title: "Grigoriopol", parent: "eqMD" },
    { id: "eqMD-HIN", title: "Hîncesti", parent: "eqMD" },
    { id: "eqMD-IAL", title: "Ialoveni", parent: "eqMD" },
    { id: "eqMD-LEO", title: "Leova", parent: "eqMD" },
    { id: "eqMD-NIS", title: "Nisporeni", parent: "eqMD" },
    { id: "eqMD-OCN", title: "Ocnita", parent: "eqMD" },
    { id: "eqMD-OHI", title: "Orhei", parent: "eqMD" },
    { id: "eqMD-REZ", title: "Rezina", parent: "eqMD" },
    { id: "eqMD-RIT", title: "Rîbnita", parent: "eqMD" },
    { id: "eqMD-RIS", title: "Rîscani", parent: "eqMD" },
    { id: "eqMD-SIN", title: "Sîngerei", parent: "eqMD" },
    { id: "eqMD-SLO", title: "Slobozia", parent: "eqMD" },
    { id: "eqMD-SOA", title: "Soroca", parent: "eqMD" },
    { id: "eqMD-STR", title: "Straseni", parent: "eqMD" },
    { id: "eqMD-SOL", title: "Soldanesti", parent: "eqMD" },
    { id: "eqMD-STE", title: "Stefan Voda", parent: "eqMD" },
    { id: "eqMD-TAR", title: "Taraclia", parent: "eqMD" },
    { id: "eqMD-TEL", title: "Telenesti", parent: "eqMD" },
    { id: "eqMD-UGI", title: "Ungheni", parent: "eqMD" },
    { id: "eqMD-VUL", title: "Vulcanesti", parent: "eqMD" },
    { id: "eqMC", title: "Monaco", parent: null },
    { id: "eqMC-MC", title: "Monaco", parent: "eqMC" },
    { id: "eqMN", title: "Mongolia", parent: null },
    { id: "eqMN-1", title: "Ulaanbaatar", parent: "eqMN" },
    { id: "eqMN-073", title: "Arhangay", parent: "eqMN" },
    { id: "eqMN-069", title: "Bayanhongor", parent: "eqMN" },
    { id: "eqMN-071", title: "Bayan-Ölgiy", parent: "eqMN" },
    { id: "eqMN-067", title: "Bulgan", parent: "eqMN" },
    { id: "eqMN-037", title: "Darhan uul", parent: "eqMN" },
    { id: "eqMN-061", title: "Dornod", parent: "eqMN" },
    { id: "eqMN-063", title: "Dornogovi", parent: "eqMN" },
    { id: "eqMN-059", title: "Dundgovi", parent: "eqMN" },
    { id: "eqMN-057", title: "Dzavhan", parent: "eqMN" },
    { id: "eqMN-065", title: "Govi-Altay", parent: "eqMN" },
    { id: "eqMN-064", title: "Govi-Sümber", parent: "eqMN" },
    { id: "eqMN-039", title: "Hentiy", parent: "eqMN" },
    { id: "eqMN-043", title: "Hovd", parent: "eqMN" },
    { id: "eqMN-041", title: "Hövsgöl", parent: "eqMN" },
    { id: "eqMN-053", title: "Ömnögovi", parent: "eqMN" },
    { id: "eqMN-035", title: "Orhon", parent: "eqMN" },
    { id: "eqMN-055", title: "Övörhangay", parent: "eqMN" },
    { id: "eqMN-049", title: "Selenge", parent: "eqMN" },
    { id: "eqMN-051", title: "Sühbaatar", parent: "eqMN" },
    { id: "eqMN-047", title: "Töv", parent: "eqMN" },
    { id: "eqMN-046", title: "Uvs", parent: "eqMN" },
    { id: "eqMS", title: "Montserrat", parent: null },
    { id: "eqMS-MS", title: "Montserrat", parent: "eqMS" },
    { id: "eqMA", title: "Morocco", parent: null },
    { id: "eqMA-CE", title: "Centre", parent: "eqMA" },
    { id: "eqMA-AZI", title: "Azilal", parent: "eqMA-CE" },
    { id: "eqMA-BEM", title: "Beni Mellal", parent: "eqMA-CE" },
    { id: "eqMA-BES", title: "Ben Slimane", parent: "eqMA-CE" },
    { id: "eqMA-BOM", title: "Boulemane", parent: "eqMA-CE" },
    {
        id: "eqMA-CAS",
        title: "Casablanca [Dar el Beïda]",
        parent: "eqMA-CE"
    },
    { id: "eqMA-JDI", title: "El Jadida", parent: "eqMA-CE" },
    { id: "eqMA-KHO", title: "Khouribga", parent: "eqMA-CE" },
    { id: "eqMA-SET", title: "Settat", parent: "eqMA-CE" },
    { id: "eqMA-CN", title: "Centre-Nord", parent: "eqMA" },
    { id: "eqMA-HOC", title: "Al Hoceïma", parent: "eqMA-CN" },
    { id: "eqMA-FES", title: "Fès", parent: "eqMA-CN" },
    { id: "eqMA-SEF", title: "Sefrou", parent: "eqMA-CN" },
    { id: "eqMA-TAO", title: "Taounate", parent: "eqMA-CN" },
    { id: "eqMA-TAZ", title: "Taza", parent: "eqMA-CN" },
    { id: "eqMA-CS", title: "Centre-Sud", parent: "eqMA" },
    { id: "eqMA-HAJ", title: "El Hajeb", parent: "eqMA-CS" },
    { id: "eqMA-ERR", title: "Errachidia", parent: "eqMA-CS" },
    { id: "eqMA-IFR", title: "Ifrane", parent: "eqMA-CS" },
    { id: "eqMA-KHN", title: "Khenifra", parent: "eqMA-CS" },
    { id: "eqMA-MEK", title: "Meknès", parent: "eqMA-CS" },
    { id: "eqMA-ES", title: "Est", parent: "eqMA" },
    { id: "eqMA-BER", title: "Berkane", parent: "eqMA-ES" },
    { id: "eqMA-FIG", title: "Figuig", parent: "eqMA-ES" },
    { id: "eqMA-IRA", title: "Jrada", parent: "eqMA-ES" },
    { id: "eqMA-NAD", title: "Nador", parent: "eqMA-ES" },
    { id: "eqMA-OUJ", title: "Oujda", parent: "eqMA-ES" },
    { id: "eqMA-NO", title: "Nord-Ouest", parent: "eqMA" },
    { id: "eqMA-CHE", title: "Chefchaouene", parent: "eqMA-NO" },
    { id: "eqMA-KEN", title: "Kénitra", parent: "eqMA-NO" },
    { id: "eqMA-KHE", title: "Khemisset", parent: "eqMA-NO" },
    { id: "eqMA-LAR", title: "Larache", parent: "eqMA-NO" },
    { id: "eqMA-RBA", title: "Rabat-Salé", parent: "eqMA-NO" },
    { id: "eqMA-SIK", title: "Sidi Kacem", parent: "eqMA-NO" },
    { id: "eqMA-TNG", title: "Tanger", parent: "eqMA-NO" },
    { id: "eqMA-TET", title: "Tétouan", parent: "eqMA-NO" },
    { id: "eqMA-SU", title: "Sud", parent: "eqMA" },
    { id: "eqMA-AGD", title: "Agadir", parent: "eqMA-SU" },
    { id: "eqMA-BAH", title: "Aït Baha", parent: "eqMA-SU" },
    { id: "eqMA-MEL", title: "Aït Melloul", parent: "eqMA-SU" },
    { id: "eqMA-ASZ", title: "Assa-Zag", parent: "eqMA-SU" },
    {
        id: "eqMA-BOD",
        title: "Boujdour (EH)",
        parent: "eqMA-SU"
    },
    {
        id: "eqMA-ESM",
        title: "Es Semara (EH)",
        parent: "eqMA-SU"
    },
    { id: "eqMA-GUE", title: "Guelmim", parent: "eqMA-SU" },
    {
        id: "eqMA-LAA",
        title: "Laayoune (EH)",
        parent: "eqMA-SU"
    },
    { id: "eqMA-OUA", title: "Ouarzazate", parent: "eqMA-SU" },
    {
        id: "eqMA-OUD",
        title: "Oued ed Dahab (EH)",
        parent: "eqMA-SU"
    },
    { id: "eqMA-TNT", title: "Tan-Tan", parent: "eqMA-SU" },
    { id: "eqMA-TAR", title: "Taroudannt", parent: "eqMA-SU" },
    { id: "eqMA-TAT", title: "Tata", parent: "eqMA-SU" },
    { id: "eqMA-TIZ", title: "Tiznit", parent: "eqMA-SU" },
    { id: "eqMA-TS", title: "Tensift", parent: "eqMA" },
    { id: "eqMA-HAO", title: "Al Haouz", parent: "eqMA-TS" },
    { id: "eqMA-CHI", title: "Chichaoua", parent: "eqMA-TS" },
    { id: "eqMA-ESI", title: "Essaouira", parent: "eqMA-TS" },
    {
        id: "eqMA-KES",
        title: "Kelaat Sraghna",
        parent: "eqMA-TS"
    },
    { id: "eqMA-MAR", title: "Marrakech", parent: "eqMA-TS" },
    { id: "eqMA-SAF", title: "Safi", parent: "eqMA-TS" },
    { id: "eqMZ", title: "Mozambique", parent: null },
    { id: "eqMZ-MPM", title: "Maputo", parent: "eqMZ" },
    { id: "eqMZ-P", title: "Cabo Delgado", parent: "eqMZ" },
    { id: "eqMZ-G", title: "Gaza", parent: "eqMZ" },
    { id: "eqMZ-I", title: "Inhambane", parent: "eqMZ" },
    { id: "eqMZ-B", title: "Manica", parent: "eqMZ" },
    { id: "eqMZ-L", title: "Maputo", parent: "eqMZ" },
    { id: "eqMZ-N", title: "Nampula", parent: "eqMZ" },
    { id: "eqMZ-A", title: "Niassa", parent: "eqMZ" },
    { id: "eqMZ-S", title: "Sofala", parent: "eqMZ" },
    { id: "eqMZ-T", title: "Tete", parent: "eqMZ" },
    { id: "eqMZ-Q", title: "Zambézia", parent: "eqMZ" },
    { id: "eqMM", title: "Myanmar", parent: null },
    { id: "eqMM-07", title: "Ayeyarwady", parent: "eqMM" },
    { id: "eqMM-02", title: "Bago", parent: "eqMM" },
    { id: "eqMM-03", title: "Magway", parent: "eqMM" },
    { id: "eqMM-04", title: "Mandalay", parent: "eqMM" },
    { id: "eqMM-01", title: "Sagaing", parent: "eqMM" },
    { id: "eqMM-05", title: "Tanintharyi", parent: "eqMM" },
    { id: "eqMM-06", title: "Yangon", parent: "eqMM" },
    { id: "eqMM-14", title: "Chin", parent: "eqMM" },
    { id: "eqMM-11", title: "Kachin", parent: "eqMM" },
    { id: "eqMM-12", title: "Kayah", parent: "eqMM" },
    { id: "eqMM-13", title: "Kayin", parent: "eqMM" },
    { id: "eqMM-15", title: "Mon", parent: "eqMM" },
    { id: "eqMM-16", title: "Rakhine", parent: "eqMM" },
    { id: "eqMM-17", title: "Shan", parent: "eqMM" },
    { id: "eqNA", title: "Namibia", parent: null },
    { id: "eqNA-CA", title: "Caprivi", parent: "eqNA" },
    { id: "eqNA-ER", title: "Erongo", parent: "eqNA" },
    { id: "eqNA-HA", title: "Hardap", parent: "eqNA" },
    { id: "eqNA-KA", title: "Karas", parent: "eqNA" },
    { id: "eqNA-KH", title: "Khomas", parent: "eqNA" },
    { id: "eqNA-KU", title: "Kunene", parent: "eqNA" },
    { id: "eqNA-OW", title: "Ohangwena", parent: "eqNA" },
    { id: "eqNA-OK", title: "Okavango", parent: "eqNA" },
    { id: "eqNA-OH", title: "Omaheke", parent: "eqNA" },
    { id: "eqNA-OS", title: "Omusati", parent: "eqNA" },
    { id: "eqNA-ON", title: "Oshana", parent: "eqNA" },
    { id: "eqNA-OT", title: "Oshikoto", parent: "eqNA" },
    { id: "eqNA-OD", title: "Otjozondjupa", parent: "eqNA" },
    { id: "eqNR", title: "Nauru", parent: null },
    { id: "eqNR-NR", title: "Nauru", parent: "eqNR" },
    { id: "eqNP", title: "Nepal", parent: null },
    { id: "eqNP-1", title: "Madhyamanchal", parent: "eqNP" },
    { id: "eqNP-BA", title: "Bagmati", parent: "eqNP-1" },
    { id: "eqNP-JA", title: "Janakpur", parent: "eqNP-1" },
    { id: "eqNP-NA", title: "Narayani", parent: "eqNP-1" },
    {
        id: "eqNP-2",
        title: "Madhya Pashchimanchal",
        parent: "eqNP"
    },
    { id: "eqNP-BH", title: "Bheri", parent: "eqNP-2" },
    { id: "eqNP-KA", title: "Karnali", parent: "eqNP-2" },
    { id: "eqNP-RA", title: "Rapti", parent: "eqNP-2" },
    { id: "eqNP-3", title: "Pashchimanchal", parent: "eqNP" },
    { id: "eqNP-DH", title: "Dhawalagiri", parent: "eqNP-3" },
    { id: "eqNP-GA", title: "Gandaki", parent: "eqNP-3" },
    { id: "eqNP-LU", title: "Lumbini", parent: "eqNP-3" },
    { id: "eqNP-4", title: "Purwanchal", parent: "eqNP" },
    { id: "eqNP-KO", title: "Kosi [Koshi]", parent: "eqNP-4" },
    { id: "eqNP-ME", title: "Mechi", parent: "eqNP-4" },
    { id: "eqNP-SA", title: "Sagarmatha", parent: "eqNP-4" },
    {
        id: "eqNP-5",
        title: "Sudur Pashchimanchal",
        parent: "eqNP"
    },
    { id: "eqNP-MA", title: "Mahakali", parent: "eqNP-5" },
    { id: "eqNP-SE", title: "Seti", parent: "eqNP-5" },
    { id: "eqNL", title: "Netherlands", parent: null },
    { id: "eqNL-DR", title: "Drenthe", parent: "eqNL" },
    { id: "eqNL-FL", title: "Flevoland", parent: "eqNL" },
    { id: "eqNL-FR", title: "Friesland", parent: "eqNL" },
    { id: "eqNL-GE", title: "Gelderland", parent: "eqNL" },
    { id: "eqNL-GR", title: "Groningen", parent: "eqNL" },
    { id: "eqNL-LI", title: "Limburg", parent: "eqNL" },
    { id: "eqNL-NB", title: "Noord-Brabant", parent: "eqNL" },
    { id: "eqNL-NH", title: "Noord-Holland", parent: "eqNL" },
    { id: "eqNL-OV", title: "Overijssel", parent: "eqNL" },
    { id: "eqNL-UT", title: "Utrecht", parent: "eqNL" },
    { id: "eqNL-ZE", title: "Zeeland", parent: "eqNL" },
    { id: "eqNL-ZH", title: "Zuid-Holland", parent: "eqNL" },
    { id: "eqAN", title: "Netherlands Antilles", parent: null },
    {
        id: "eqAN-AN",
        title: "Netherlands Antilles",
        parent: "eqAN"
    },
    { id: "eqNC", title: "New Caledonia", parent: null },
    { id: "eqNC-NC", title: "New Caledonia", parent: "eqNC" },
    { id: "eqNZ", title: "New Zealand", parent: null },
    { id: "eqNZ-N", title: "North Island", parent: "eqNZ" },
    { id: "eqNZ-AUK", title: "Auckland", parent: "eqNZ-N" },
    { id: "eqNZ-BOP", title: "Bay of Plenty", parent: "eqNZ-N" },
    { id: "eqNZ-GIS", title: "Gisborne", parent: "eqNZ-N" },
    { id: "eqNZ-HKB", title: "Hawkes's Bay", parent: "eqNZ-N" },
    {
        id: "eqNZ-MWT",
        title: "Manawatu-Wanganui",
        parent: "eqNZ-N"
    },
    { id: "eqNZ-NTL", title: "Northland", parent: "eqNZ-N" },
    { id: "eqNZ-TKI", title: "Taranaki", parent: "eqNZ-N" },
    { id: "eqNZ-WKO", title: "Waikato", parent: "eqNZ-N" },
    { id: "eqNZ-WGN", title: "Wellington", parent: "eqNZ-N" },
    { id: "eqNZ-S", title: "South Island", parent: "eqNZ" },
    { id: "eqNZ-CAN", title: "Canterbury", parent: "eqNZ-S" },
    { id: "eqNZ-MBH", title: "Marlborough", parent: "eqNZ-S" },
    { id: "eqNZ-NSN", title: "Nelson", parent: "eqNZ-S" },
    { id: "eqNZ-OTA", title: "Otago", parent: "eqNZ-S" },
    { id: "eqNZ-STL", title: "Southland", parent: "eqNZ-S" },
    { id: "eqNZ-TAS", title: "Tasman", parent: "eqNZ-S" },
    { id: "eqNZ-WTC", title: "West Coast", parent: "eqNZ-S" },
    { id: "eqNI", title: "Nicaragua", parent: null },
    { id: "eqNI-BO", title: "Boaco", parent: "eqNI" },
    { id: "eqNI-CA", title: "Carazo", parent: "eqNI" },
    { id: "eqNI-CI", title: "Chinandega", parent: "eqNI" },
    { id: "eqNI-CO", title: "Chontales", parent: "eqNI" },
    { id: "eqNI-ES", title: "Estelí", parent: "eqNI" },
    { id: "eqNI-GR", title: "Granada", parent: "eqNI" },
    { id: "eqNI-JI", title: "Jinotega", parent: "eqNI" },
    { id: "eqNI-LE", title: "León", parent: "eqNI" },
    { id: "eqNI-MD", title: "Madriz", parent: "eqNI" },
    { id: "eqNI-MN", title: "Manaqua", parent: "eqNI" },
    { id: "eqNI-MS", title: "Masaya", parent: "eqNI" },
    { id: "eqNI-MT", title: "Matagalpa", parent: "eqNI" },
    { id: "eqNI-NS", title: "Nueva Segovia", parent: "eqNI" },
    { id: "eqNI-SJ", title: "Río San Juan", parent: "eqNI" },
    { id: "eqNI-RI", title: "Rivas", parent: "eqNI" },
    { id: "eqNI-ZE", title: "Zelaya", parent: "eqNI" },
    { id: "eqNE", title: "Niger", parent: null },
    { id: "eqNE-8", title: "Niamey", parent: "eqNE" },
    { id: "eqNE-1", title: "Agadez", parent: "eqNE" },
    { id: "eqNE-2", title: "Diffa", parent: "eqNE" },
    { id: "eqNE-3", title: "Dosso", parent: "eqNE" },
    { id: "eqNE-4", title: "Maradi", parent: "eqNE" },
    { id: "eqNE-5", title: "Tahoua", parent: "eqNE" },
    { id: "eqNE-6", title: "Tillaberi", parent: "eqNE" },
    { id: "eqNE-7", title: "Zinder", parent: "eqNE" },
    { id: "eqNG", title: "Nigeria", parent: null },
    {
        id: "eqNG-FC",
        title: "Abuja Capital Territory",
        parent: "eqNG"
    },
    { id: "eqNG-AB", title: "Abia", parent: "eqNG" },
    { id: "eqNG-AD", title: "Adamawa", parent: "eqNG" },
    { id: "eqNG-AK", title: "Akwa Ibom", parent: "eqNG" },
    { id: "eqNG-AN", title: "Anambra", parent: "eqNG" },
    { id: "eqNG-BA", title: "Bauchi", parent: "eqNG" },
    { id: "eqNG-BE", title: "Benue", parent: "eqNG" },
    { id: "eqNG-BO", title: "Borno", parent: "eqNG" },
    { id: "eqNG-CR", title: "Cross River", parent: "eqNG" },
    { id: "eqNG-DE", title: "Delta", parent: "eqNG" },
    { id: "eqNG-ED", title: "Edo", parent: "eqNG" },
    { id: "eqNG-EN", title: "Enugu", parent: "eqNG" },
    { id: "eqNG-IM", title: "Imo", parent: "eqNG" },
    { id: "eqNG-JI", title: "Jigawa", parent: "eqNG" },
    { id: "eqNG-KD", title: "Kaduna", parent: "eqNG" },
    { id: "eqNG-KN", title: "Kano", parent: "eqNG" },
    { id: "eqNG-KT", title: "Katsina", parent: "eqNG" },
    { id: "eqNG-KE", title: "Kebbi", parent: "eqNG" },
    { id: "eqNG-KO", title: "Kogi", parent: "eqNG" },
    { id: "eqNG-KW", title: "Kwara", parent: "eqNG" },
    { id: "eqNG-LA", title: "Lagos", parent: "eqNG" },
    { id: "eqNG-NI", title: "Niger", parent: "eqNG" },
    { id: "eqNG-OG", title: "Ogun", parent: "eqNG" },
    { id: "eqNG-ON", title: "Ondo", parent: "eqNG" },
    { id: "eqNG-OS", title: "Osun", parent: "eqNG" },
    { id: "eqNG-OY", title: "Oyo", parent: "eqNG" },
    { id: "eqNG-PL", title: "Plateau", parent: "eqNG" },
    { id: "eqNG-RI", title: "Rivers", parent: "eqNG" },
    { id: "eqNG-SO", title: "Sokoto", parent: "eqNG" },
    { id: "eqNG-TA", title: "Taraba", parent: "eqNG" },
    { id: "eqNG-YO", title: "Yobe", parent: "eqNG" },
    { id: "eqNU", title: "Niue", parent: null },
    { id: "eqNU-NU", title: "Niue", parent: "eqNU" },
    { id: "eqNF", title: "Norfolk Island", parent: null },
    { id: "eqNF-NF", title: "Norfolk Island", parent: "eqNF" },
    {
        id: "eqMP",
        title: "Northern Mariana Islands",
        parent: null
    },
    {
        id: "eqMP-MP",
        title: "Northern Mariana Islands",
        parent: "eqMP"
    },
    { id: "eqNO", title: "Norway", parent: null },
    { id: "eqNO-02", title: "Akershus", parent: "eqNO" },
    { id: "eqNO-09", title: "Aust-Agder", parent: "eqNO" },
    { id: "eqNO-06", title: "Buskerud", parent: "eqNO" },
    { id: "eqNO-20", title: "Finnmark", parent: "eqNO" },
    { id: "eqNO-04", title: "Hedmark", parent: "eqNO" },
    { id: "eqNO-12", title: "Hordaland", parent: "eqNO" },
    { id: "eqNO-15", title: "Møre og Romsdal", parent: "eqNO" },
    { id: "eqNO-18", title: "Nordland", parent: "eqNO" },
    { id: "eqNO-17", title: "Nord-Trøndelag", parent: "eqNO" },
    { id: "eqNO-05", title: "Oppland", parent: "eqNO" },
    { id: "eqNO-03", title: "Oslo", parent: "eqNO" },
    { id: "eqNO-11", title: "Rogaland", parent: "eqNO" },
    { id: "eqNO-14", title: "Sogn og Fjordane", parent: "eqNO" },
    { id: "eqNO-16", title: "Sør-Trøndelag", parent: "eqNO" },
    { id: "eqNO-08", title: "Telemark", parent: "eqNO" },
    { id: "eqNO-19", title: "Troms", parent: "eqNO" },
    { id: "eqNO-10", title: "Vest-Agder", parent: "eqNO" },
    { id: "eqNO-07", title: "Vestfold", parent: "eqNO" },
    { id: "eqNO-01", title: "Østfold", parent: "eqNO" },
    {
        id: "eqNO-22",
        title: "Jan Mayen (Arctic Region)",
        parent: "eqNO"
    },
    {
        id: "eqNO-21",
        title: "Svalbard (Arctic Region)",
        parent: "eqNO"
    },
    { id: "eqOM", title: "Oman", parent: null },
    { id: "eqOM-DA", title: "Ad Dakhiliyah", parent: "eqOM" },
    { id: "eqOM-BA", title: "Al Batinah", parent: "eqOM" },
    {
        id: "eqOM-JA",
        title: "Al Janubiyah [Zufar]",
        parent: "eqOM"
    },
    { id: "eqOM-WU", title: "Al Wusta", parent: "eqOM" },
    { id: "eqOM-SH", title: "Ash Sharqiyah", parent: "eqOM" },
    { id: "eqOM-ZA", title: "Az Zahirah", parent: "eqOM" },
    { id: "eqOM-MA", title: "Masqat", parent: "eqOM" },
    { id: "eqOM-MU", title: "Musandam", parent: "eqOM" },
    { id: "eqPK", title: "Pakistan", parent: null },
    { id: "eqPK-IS", title: "Islamabad", parent: "eqPK" },
    {
        id: "eqPK-BA",
        title: "Baluchistan (Balochistan)",
        parent: "eqPK"
    },
    {
        id: "eqPK-NW",
        title: "North-West Frontier",
        parent: "eqPK"
    },
    { id: "eqPK-PB", title: "Punjab", parent: "eqPK" },
    { id: "eqPK-SD", title: "Sind (Sindh)", parent: "eqPK" },
    {
        id: "eqPK-TA",
        title: "Federally Administered Tribal Areas",
        parent: "eqPK"
    },
    { id: "eqPK-JK", title: "Azad Kashmir", parent: "eqPK" },
    { id: "eqPK-NA", title: "Northern Areas", parent: "eqPK" },
    { id: "eqPW", title: "Palau", parent: null },
    { id: "eqPW-PW", title: "Palau", parent: "eqPW" },
    { id: "eqPA", title: "Panama", parent: null },
    { id: "eqPA-1", title: "Botas del Toro", parent: "eqPA" },
    { id: "eqPA-2", title: "Coclé", parent: "eqPA" },
    { id: "eqPA-3", title: "Colón", parent: "eqPA" },
    { id: "eqPA-4", title: "Chiriqui", parent: "eqPA" },
    { id: "eqPA-5", title: "Darién", parent: "eqPA" },
    { id: "eqPA-6", title: "Herrera", parent: "eqPA" },
    { id: "eqPA-7", title: "Los Santos", parent: "eqPA" },
    { id: "eqPA-8", title: "Panamá", parent: "eqPA" },
    { id: "eqPA-9", title: "Veraguas", parent: "eqPA" },
    {
        id: "eqPA-0",
        title: "Comarca de San Blas",
        parent: "eqPA"
    },
    { id: "eqPG", title: "Papua New Guinea", parent: null },
    {
        id: "eqPG-NCD",
        title: "National Capital District (Port Moresby)",
        parent: "eqPG"
    },
    { id: "eqPG-CPM", title: "Central", parent: "eqPG" },
    { id: "eqPG-CPK", title: "Chimbu", parent: "eqPG" },
    {
        id: "eqPG-EHG",
        title: "Eastern Highlands",
        parent: "eqPG"
    },
    {
        id: "eqPG-EBR",
        title: "East New Britain",
        parent: "eqPG"
    },
    { id: "eqPG-ESW", title: "East Sepik", parent: "eqPG" },
    { id: "eqPG-EPW", title: "Enga", parent: "eqPG" },
    { id: "eqPG-GPK", title: "Gulf", parent: "eqPG" },
    { id: "eqPG-MPM", title: "Madang", parent: "eqPG" },
    { id: "eqPG-MRL", title: "Manus", parent: "eqPG" },
    { id: "eqPG-MBA", title: "Milne Bay", parent: "eqPG" },
    { id: "eqPG-MPL", title: "Morobe", parent: "eqPG" },
    { id: "eqPG-NIK", title: "New Ireland", parent: "eqPG" },
    { id: "eqPG-NPP", title: "Northern", parent: "eqPG" },
    { id: "eqPG-NSA", title: "North Solomons", parent: "eqPG" },
    {
        id: "eqPG-SAN",
        title: "Sandaun [West Sepik]",
        parent: "eqPG"
    },
    {
        id: "eqPG-SHM",
        title: "Southern Highlands",
        parent: "eqPG"
    },
    { id: "eqPG-WPD", title: "Western", parent: "eqPG" },
    {
        id: "eqPG-WHM",
        title: "Western Highlands",
        parent: "eqPG"
    },
    {
        id: "eqPG-WBK",
        title: "West New Britain",
        parent: "eqPG"
    },
    { id: "eqPY", title: "Paraguay", parent: null },
    { id: "eqPY-ASU", title: "Asunción", parent: "eqPY" },
    { id: "eqPY-16", title: "Alto Paraguay", parent: "eqPY" },
    { id: "eqPY-10", title: "Alto Parang", parent: "eqPY" },
    { id: "eqPY-13", title: "Amambay", parent: "eqPY" },
    { id: "eqPY-19", title: "Boquerón", parent: "eqPY" },
    { id: "eqPY-5", title: "Caaguazú", parent: "eqPY" },
    { id: "eqPY-6", title: "Caazapá", parent: "eqPY" },
    { id: "eqPY-14", title: "Canindeyú", parent: "eqPY" },
    { id: "eqPY-11", title: "Central", parent: "eqPY" },
    { id: "eqPY-1", title: "Concepción", parent: "eqPY" },
    { id: "eqPY-3", title: "Cordillera", parent: "eqPY" },
    { id: "eqPY-4", title: "Guairá", parent: "eqPY" },
    { id: "eqPY-7", title: "Itapúa", parent: "eqPY" },
    { id: "eqPY-8", title: "Misiones", parent: "eqPY" },
    { id: "eqPY-12", title: "Neembucú", parent: "eqPY" },
    { id: "eqPY-9", title: "Paraguari", parent: "eqPY" },
    { id: "eqPY-15", title: "Presidente Hayes", parent: "eqPY" },
    { id: "eqPY-2", title: "San Pedro", parent: "eqPY" },
    { id: "eqPE", title: "Peru", parent: null },
    { id: "eqPE-CAL", title: "El Callao", parent: "eqPE" },
    { id: "eqPE-AMA", title: "Amazonas", parent: "eqPE" },
    { id: "eqPE-ANC", title: "Ancash", parent: "eqPE" },
    { id: "eqPE-APU", title: "Apurímac", parent: "eqPE" },
    { id: "eqPE-ARE", title: "Arequipa", parent: "eqPE" },
    { id: "eqPE-AYA", title: "Ayacucho", parent: "eqPE" },
    { id: "eqPE-CAJ", title: "Cajamarca", parent: "eqPE" },
    { id: "eqPE-CUS", title: "Cuzco [Cusco]", parent: "eqPE" },
    { id: "eqPE-HUV", title: "Huancavelica", parent: "eqPE" },
    { id: "eqPE-HUC", title: "Huánuco", parent: "eqPE" },
    { id: "eqPE-ICA", title: "Ica", parent: "eqPE" },
    { id: "eqPE-JUN", title: "Junín", parent: "eqPE" },
    { id: "eqPE-LAL", title: "La Libertad", parent: "eqPE" },
    { id: "eqPE-LAM", title: "Lambayeque", parent: "eqPE" },
    { id: "eqPE-LIM", title: "Lima", parent: "eqPE" },
    { id: "eqPE-LOR", title: "Loreto", parent: "eqPE" },
    { id: "eqPE-MDD", title: "Madre de Dios", parent: "eqPE" },
    { id: "eqPE-MOQ", title: "Moquegua", parent: "eqPE" },
    { id: "eqPE-PAS", title: "Pasco", parent: "eqPE" },
    { id: "eqPE-PIU", title: "Piura", parent: "eqPE" },
    { id: "eqPE-PUN", title: "Puno", parent: "eqPE" },
    { id: "eqPE-SAM", title: "San Martín", parent: "eqPE" },
    { id: "eqPE-TAC", title: "Tacna", parent: "eqPE" },
    { id: "eqPE-TUM", title: "Tumbes", parent: "eqPE" },
    { id: "eqPE-UCA", title: "Ucayali", parent: "eqPE" },
    { id: "eqPH", title: "Philippines", parent: null },
    { id: "eqPH-PH", title: "Philippines", parent: "eqPH" },
    { id: "eqPN", title: "Pitcairn", parent: null },
    { id: "eqPN-PN", title: "Pitcairn", parent: "eqPN" },
    { id: "eqPL", title: "Poland", parent: null },
    { id: "eqPL-BP", title: "Biala Podlaska", parent: "eqPL" },
    { id: "eqPL-BK", title: "Bialystok", parent: "eqPL" },
    { id: "eqPL-BB", title: "Bielsko", parent: "eqPL" },
    { id: "eqPL-BY", title: "Bydgoszcz", parent: "eqPL" },
    { id: "eqPL-CH", title: "Chelm", parent: "eqPL" },
    { id: "eqPL-CI", title: "Ciechanów", parent: "eqPL" },
    { id: "eqPL-CZ", title: "Czestochowa", parent: "eqPL" },
    { id: "eqPL-EL", title: "Elblag", parent: "eqPL" },
    { id: "eqPL-GD", title: "Gdansk", parent: "eqPL" },
    { id: "eqPL-GO", title: "Gorzów", parent: "eqPL" },
    { id: "eqPL-JG", title: "Jelenia Gera", parent: "eqPL" },
    { id: "eqPL-KL", title: "Kalisz", parent: "eqPL" },
    { id: "eqPL-KA", title: "Katowice", parent: "eqPL" },
    { id: "eqPL-KI", title: "Kielce", parent: "eqPL" },
    { id: "eqPL-KN", title: "Konin", parent: "eqPL" },
    { id: "eqPL-KO", title: "Koszalin", parent: "eqPL" },
    { id: "eqPL-KR", title: "Kraków", parent: "eqPL" },
    { id: "eqPL-KS", title: "Krosno", parent: "eqPL" },
    { id: "eqPL-LG", title: "Legnica", parent: "eqPL" },
    { id: "eqPL-LE", title: "Leszno", parent: "eqPL" },
    { id: "eqPL-LU", title: "Lublin", parent: "eqPL" },
    { id: "eqPL-LO", title: "Lomia", parent: "eqPL" },
    { id: "eqPL-LD", title: "Lódz", parent: "eqPL" },
    { id: "eqPL-NS", title: "Nowy Sacz", parent: "eqPL" },
    { id: "eqPL-OL", title: "Olsztyn", parent: "eqPL" },
    { id: "eqPL-OP", title: "Opole", parent: "eqPL" },
    { id: "eqPL-OS", title: "Ostroleka", parent: "eqPL" },
    { id: "eqPL-PI", title: "Pila", parent: "eqPL" },
    { id: "eqPL-PT", title: "Piotrków", parent: "eqPL" },
    { id: "eqPL-PL", title: "Plock", parent: "eqPL" },
    { id: "eqPL-PO", title: "Poznan", parent: "eqPL" },
    { id: "eqPL-PR", title: "Przemysl", parent: "eqPL" },
    { id: "eqPL-RA", title: "Radom", parent: "eqPL" },
    { id: "eqPL-RZ", title: "Rzeszów", parent: "eqPL" },
    { id: "eqPL-SE", title: "Siedlce", parent: "eqPL" },
    { id: "eqPL-SI", title: "Sieradz", parent: "eqPL" },
    { id: "eqPL-SK", title: "Skierniewice", parent: "eqPL" },
    { id: "eqPL-SL", title: "Slupsk", parent: "eqPL" },
    { id: "eqPL-SU", title: "Suwalki", parent: "eqPL" },
    { id: "eqPL-SZ", title: "Szczecin", parent: "eqPL" },
    { id: "eqPL-TG", title: "Tarnobrzeg", parent: "eqPL" },
    { id: "eqPL-TA", title: "Tarnów", parent: "eqPL" },
    { id: "eqPL-TO", title: "Torun", parent: "eqPL" },
    { id: "eqPL-WB", title: "Walbrzych", parent: "eqPL" },
    { id: "eqPL-WA", title: "Warszawa", parent: "eqPL" },
    { id: "eqPL-WL", title: "Wloclawek", parent: "eqPL" },
    { id: "eqPL-WR", title: "Wroclaw", parent: "eqPL" },
    { id: "eqPL-ZA", title: "Zamosc", parent: "eqPL" },
    { id: "eqPL-ZG", title: "Zielona Góra", parent: "eqPL" },
    { id: "eqPT", title: "Portugal", parent: null },
    { id: "eqPT-01", title: "Aveiro", parent: "eqPT" },
    { id: "eqPT-02", title: "Beja", parent: "eqPT" },
    { id: "eqPT-03", title: "Braga", parent: "eqPT" },
    { id: "eqPT-04", title: "Bragança", parent: "eqPT" },
    { id: "eqPT-05", title: "Castelo Branco", parent: "eqPT" },
    { id: "eqPT-06", title: "Coimbra", parent: "eqPT" },
    { id: "eqPT-07", title: "Évora", parent: "eqPT" },
    { id: "eqPT-08", title: "Faro", parent: "eqPT" },
    { id: "eqPT-09", title: "Guarda", parent: "eqPT" },
    { id: "eqPT-10", title: "Leiria", parent: "eqPT" },
    { id: "eqPT-11", title: "Lisboa", parent: "eqPT" },
    { id: "eqPT-12", title: "Portalegre", parent: "eqPT" },
    { id: "eqPT-13", title: "Porto", parent: "eqPT" },
    { id: "eqPT-14", title: "Santarém", parent: "eqPT" },
    { id: "eqPT-15", title: "Setúbal", parent: "eqPT" },
    { id: "eqPT-16", title: "Viana do Castelo", parent: "eqPT" },
    { id: "eqPT-17", title: "Vila Real", parent: "eqPT" },
    { id: "eqPT-18", title: "Viseu", parent: "eqPT" },
    {
        id: "eqPT-20",
        title: "Regiao Autónoma dos Açores",
        parent: "eqPT"
    },
    {
        id: "eqPT-30",
        title: "Regiao Autónoma da Madeira",
        parent: "eqPT"
    },
    { id: "eqPR", title: "Puerto Rico", parent: null },
    { id: "eqPR-PR", title: "Puerto Rico", parent: "eqPR" },
    { id: "eqQA", title: "Qatar", parent: null },
    { id: "eqQA-DA", title: "Ad Daw?ah", parent: "eqQA" },
    { id: "eqQA-GH", title: "Al Ghuwayriyah", parent: "eqQA" },
    { id: "eqQA-JU", title: "Al Jumayliyah", parent: "eqQA" },
    { id: "eqQA-KH", title: "Al Khawr", parent: "eqQA" },
    { id: "eqQA-WA", title: "Al Wakrah", parent: "eqQA" },
    { id: "eqQA-RA", title: "Ar Rayyan", parent: "eqQA" },
    {
        id: "eqQA-JB",
        title: "Jariyan al Batnah",
        parent: "eqQA"
    },
    {
        id: "eqQA-MS",
        title: "Madinat ash Shamal",
        parent: "eqQA"
    },
    { id: "eqQA-US", title: "Umm Salal", parent: "eqQA" },
    { id: "eqRE", title: "Reunion", parent: null },
    { id: "eqRE-RE", title: "Reunion", parent: "eqRE" },
    { id: "eqRO", title: "Romania", parent: null },
    { id: "eqRO-B", title: "Bucuresti", parent: "eqRO" },
    { id: "eqRO-AB", title: "Alba", parent: "eqRO" },
    { id: "eqRO-AR", title: "Arad", parent: "eqRO" },
    { id: "eqRO-AG", title: "Arges", parent: "eqRO" },
    { id: "eqRO-BC", title: "Bacau", parent: "eqRO" },
    { id: "eqRO-BH", title: "Bihor", parent: "eqRO" },
    { id: "eqRO-BN", title: "Bistrita-Nasaud", parent: "eqRO" },
    { id: "eqRO-BT", title: "Botosani", parent: "eqRO" },
    { id: "eqRO-BV", title: "Brasov", parent: "eqRO" },
    { id: "eqRO-BR", title: "Braila", parent: "eqRO" },
    { id: "eqRO-BZ", title: "Buzau", parent: "eqRO" },
    { id: "eqRO-CS", title: "Caras-Severin", parent: "eqRO" },
    { id: "eqRO-CL", title: "Calarasi", parent: "eqRO" },
    { id: "eqRO-CJ", title: "Cluj", parent: "eqRO" },
    { id: "eqRO-CT", title: "Constanta", parent: "eqRO" },
    { id: "eqRO-CV", title: "Covasna", parent: "eqRO" },
    { id: "eqRO-DB", title: "Dâmbovita", parent: "eqRO" },
    { id: "eqRO-DJ", title: "Dolj", parent: "eqRO" },
    { id: "eqRO-GL", title: "Galati", parent: "eqRO" },
    { id: "eqRO-GR", title: "Giurgiu", parent: "eqRO" },
    { id: "eqRO-GJ", title: "Gorj", parent: "eqRO" },
    { id: "eqRO-HR", title: "Harghita", parent: "eqRO" },
    { id: "eqRO-HD", title: "Hunedoara", parent: "eqRO" },
    { id: "eqRO-IL", title: "Ialomita", parent: "eqRO" },
    { id: "eqRO-IS", title: "Iasi", parent: "eqRO" },
    { id: "eqRO-MM", title: "Maramures", parent: "eqRO" },
    { id: "eqRO-MH", title: "Mehedinti", parent: "eqRO" },
    { id: "eqRO-MS", title: "Mures", parent: "eqRO" },
    { id: "eqRO-NT", title: "Neamt", parent: "eqRO" },
    { id: "eqRO-OT", title: "Olt", parent: "eqRO" },
    { id: "eqRO-PH", title: "Prahova", parent: "eqRO" },
    { id: "eqRO-SM", title: "Satu Mare", parent: "eqRO" },
    { id: "eqRO-SJ", title: "Salaj", parent: "eqRO" },
    { id: "eqRO-SB", title: "Sibiu", parent: "eqRO" },
    { id: "eqRO-SV", title: "Suceava", parent: "eqRO" },
    { id: "eqRO-TR", title: "Teleorman", parent: "eqRO" },
    { id: "eqRO-TM", title: "Timis", parent: "eqRO" },
    { id: "eqRO-TL", title: "Tulcea", parent: "eqRO" },
    { id: "eqRO-VS", title: "Vaslui", parent: "eqRO" },
    { id: "eqRO-VL", title: "Vâlcea", parent: "eqRO" },
    { id: "eqRO-VN", title: "Vrancea", parent: "eqRO" },
    { id: "eqRU", title: "Russian Federation", parent: null },
    {
        id: "eqRU-AD",
        title: "Adygeya, Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-AL",
        title: "Altay, Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-BA",
        title: "Bashkortostan, Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-BU",
        title: "Buryatiya, Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-CE",
        title: "Chechenskaya Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-CU",
        title: "Chuvashskaya Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-DA",
        title: "Dagestan, Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-IN",
        title: "Ingushskaya Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-KB",
        title: "Kabardino-Balkarskaya Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-KL",
        title: "Kalmykiya, Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-KC",
        title: "Karachayevo-Cherkesskaya Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-KR",
        title: "Kareliya, Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-KK",
        title: "Khakasiya, Respublika",
        parent: "eqRU"
    },
    { id: "eqRU-KO", title: "Komi, Respublika", parent: "eqRU" },
    {
        id: "eqRU-ME",
        title: "Mariy El, Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-MO",
        title: "Mordoviya, Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-SA",
        title: "Sakha, Respublika [Yakutiya]",
        parent: "eqRU"
    },
    {
        id: "eqRU-SE",
        title: "Severnaya Osetiya, Respublika [Alaniya]",
        parent: "eqRU"
    },
    {
        id: "eqRU-TA",
        title: "Tatarstan, Respublika",
        parent: "eqRU"
    },
    {
        id: "eqRU-TY",
        title: "Tyva, Respublika [Tuva]",
        parent: "eqRU"
    },
    {
        id: "eqRU-UD",
        title: "Udmurtskaya Respublika",
        parent: "eqRU"
    },
    { id: "eqRU-ALT", title: "Altayskiy kray", parent: "eqRU" },
    {
        id: "eqRU-KHA",
        title: "Khabarovskiy kray",
        parent: "eqRU"
    },
    {
        id: "eqRU-KDA",
        title: "Krasnodarskiy kray",
        parent: "eqRU"
    },
    {
        id: "eqRU-KYA",
        title: "Krasnoyarskiy kray",
        parent: "eqRU"
    },
    { id: "eqRU-PRI", title: "Primorskiy kray", parent: "eqRU" },
    {
        id: "eqRU-STA",
        title: "Stavropol 'skiy kray",
        parent: "eqRU"
    },
    {
        id: "eqRU-AMU",
        title: "Amurskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-ARK",
        title: "Arkhangel'skaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-AST",
        title: "Astrakhanskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-BEL",
        title: "Belgorodskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-BRY",
        title: "Bryanskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-CHE",
        title: "Chelyabinskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-CHI",
        title: "Chitinskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-IRK",
        title: "Irkutskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-IVA",
        title: "Ivanovskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-KGD",
        title: "Kaliningradskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-KLU",
        title: "Kaluzhskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-KAM",
        title: "Kamchatskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-KEM",
        title: "Kemerovskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-KIR",
        title: "Kirovskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-KOS",
        title: "Kostromskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-KGN",
        title: "Kurganskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-KRS",
        title: "Kurskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-LEN",
        title: "Leningradskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-LIP",
        title: "Lipetskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-MAG",
        title: "Magadanskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-MOS",
        title: "Moskovskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-MUR",
        title: "Murmanskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-NIZ",
        title: "Nizhegorodskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-NGR",
        title: "Novgorodskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-NVS",
        title: "Novosibirskaya Oblast'",
        parent: "eqRU"
    },
    { id: "eqRU-OMS", title: "Omskaya Oblast'", parent: "eqRU" },
    {
        id: "eqRU-ORE",
        title: "Orenburgskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-ORL",
        title: "Orlovskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-PNZ",
        title: "Penzenskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-PER",
        title: "Permskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-PSK",
        title: "Pskovskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-ROS",
        title: "Rostovskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-RYA",
        title: "Ryazanskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-SAK",
        title: "Sakhalinskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-SAM",
        title: "Samarskaya Oblast’",
        parent: "eqRU"
    },
    {
        id: "eqRU-SAR",
        title: "Saratovskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-SMO",
        title: "Smolenskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-SVE",
        title: "Sverdlovskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-TAM",
        title: "Tambovskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-TOM",
        title: "Tomskaya Oblast’",
        parent: "eqRU"
    },
    {
        id: "eqRU-TUL",
        title: "Tul'skaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-TVE",
        title: "Tverskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-TYU",
        title: "Tyumenskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-ULY",
        title: "Ul'yanovskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-VLA",
        title: "Vladimirskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-VGG",
        title: "Volgogradskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-VLG",
        title: "Vologodskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-VOR",
        title: "Voronezhskaya Oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-YAR",
        title: "Yaroslavskaya Oblast'",
        parent: "eqRU"
    },
    { id: "eqRU-MOW", title: "Moskva", parent: "eqRU" },
    { id: "eqRU-SPE", title: "Sankt-Peterburg", parent: "eqRU" },
    {
        id: "eqRU-YEV",
        title: "Yevreyskaya avtonomnaya oblast'",
        parent: "eqRU"
    },
    {
        id: "eqRU-AGB",
        title: "Aginskiy Buryatskiy avtonomnyy okrug",
        parent: "eqRU"
    },
    {
        id: "eqRU-CHU",
        title: "Chukotskiy avtonomnyy okrug",
        parent: "eqRU"
    },
    {
        id: "eqRU-EVE",
        title: "Evenkiyskiy avtonomnyy okrug",
        parent: "eqRU"
    },
    {
        id: "eqRU-KHM",
        title: "Khanty-Mansiyskiy avtonomnyy okrug",
        parent: "eqRU"
    },
    {
        id: "eqRU-KOP",
        title: "Komi-Permyatskiy avtonomnyy okrug",
        parent: "eqRU"
    },
    {
        id: "eqRU-KOR",
        title: "Koryakskiy avtonomnyy okrug",
        parent: "eqRU"
    },
    {
        id: "eqRU-NEN",
        title: "Nenetskiy avtonomnyy okrug",
        parent: "eqRU"
    },
    {
        id: "eqRU-TAY",
        title: "Taymyrskiy (Dolgano-Nenetskiy) avtonomnyy okrug",
        parent: "eqRU"
    },
    {
        id: "eqRU-UOB",
        title: "Ust’-Ordynskiy Buryatskiy avtonomnyy okrug",
        parent: "eqRU"
    },
    {
        id: "eqRU-YAN",
        title: "Yamalo-Nenetskiy avtonomnyy okrug",
        parent: "eqRU"
    },
    { id: "eqRW", title: "Rwanda", parent: null },
    { id: "eqRW-C", title: "Butare", parent: "eqRW" },
    { id: "eqRW-I", title: "Byumba", parent: "eqRW" },
    { id: "eqRW-E", title: "Cyangugu", parent: "eqRW" },
    { id: "eqRW-D", title: "Gikongoro", parent: "eqRW" },
    { id: "eqRW-G", title: "Gisenyi", parent: "eqRW" },
    { id: "eqRW-B", title: "Gitarama", parent: "eqRW" },
    { id: "eqRW-J", title: "Kibungo", parent: "eqRW" },
    { id: "eqRW-F", title: "Kibuye", parent: "eqRW" },
    {
        id: "eqRW-K",
        title: "Kigali-Rural (Kigali y’ Icyaro)",
        parent: "eqRW"
    },
    {
        id: "eqRW-L",
        title: "Kigali-Ville (Kilgali Ngari)",
        parent: "eqRW"
    },
    { id: "eqRW-M", title: "Mutara", parent: "eqRW" },
    { id: "eqRW-H", title: "Ruhengeri", parent: "eqRW" },
    {
        id: "eqGS",
        title: "S.Georgia & S.Sandwich Islands",
        parent: null
    },
    {
        id: "eqGS-GS",
        title: "S.Georgia & S.Sandwich Islands",
        parent: "eqGS"
    },
    {
        id: "eqKN",
        title: "Saint Kitts & Nevis",
        parent: null
    },
    {
        id: "eqKN-KN",
        title: "Saint Kitts & Nevis",
        parent: "eqKN"
    },
    { id: "eqLC", title: "Saint Lucia", parent: null },
    { id: "eqLC-LC", title: "Saint Lucia", parent: "eqLC" },
    { id: "eqWS", title: "Samoa", parent: null },
    { id: "eqWS-AA", title: "A'ana", parent: "eqWS" },
    { id: "eqWS-AL", title: "Aiga-i-le-Tai", parent: "eqWS" },
    { id: "eqWS-AT", title: "Atua", parent: "eqWS" },
    { id: "eqWS-FA", title: "Fa'asaleleaga", parent: "eqWS" },
    { id: "eqWS-GE", title: "Gaga'emauga", parent: "eqWS" },
    { id: "eqWS-GI", title: "Gagaifomauga", parent: "eqWS" },
    { id: "eqWS-PA", title: "Palauli", parent: "eqWS" },
    { id: "eqWS-SA", title: "Satupa'itea", parent: "eqWS" },
    { id: "eqWS-TU", title: "Tuamasaga", parent: "eqWS" },
    { id: "eqWS-VF", title: "Va'a-o-Fonoti", parent: "eqWS" },
    { id: "eqWS-VS", title: "Vaisigano", parent: "eqWS" },
    { id: "eqSM", title: "San Marino", parent: null },
    { id: "eqSM-SM", title: "San Marino", parent: "eqSM" },
    {
        id: "eqST",
        title: "Sao Tome & Principe",
        parent: null
    },
    { id: "eqST-P", title: "Príncipe", parent: "eqST" },
    { id: "eqST-S", title: "Sao Tomé", parent: "eqST" },
    { id: "eqSA", title: "Saudi Arabia", parent: null },
    { id: "eqSA-11", title: "Al Ba?ah", parent: "eqSA" },
    {
        id: "eqSA-08",
        title: "Al ?udud ash Shamaliyah",
        parent: "eqSA"
    },
    { id: "eqSA-12", title: "Al Jawf", parent: "eqSA" },
    { id: "eqSA-03", title: "Al Madinah", parent: "eqSA" },
    { id: "eqSA-05", title: "Al Qasim", parent: "eqSA" },
    { id: "eqSA-O1", title: "Ar Riya?", parent: "eqSA" },
    { id: "eqSA-04", title: "Ash Sharqiyah", parent: "eqSA" },
    { id: "eqSA-14", title: "‘Asir", parent: "eqSA" },
    { id: "eqSA-06", title: "?a'il", parent: "eqSA" },
    { id: "eqSA-09", title: "Jizan", parent: "eqSA" },
    { id: "eqSA-02", title: "Makkah", parent: "eqSA" },
    { id: "eqSA-10", title: "Najran", parent: "eqSA" },
    { id: "eqSA-07", title: "Tabuk", parent: "eqSA" },
    { id: "eqSN", title: "Senegal", parent: null },
    { id: "eqSN-DK", title: "Dakar", parent: "eqSN" },
    { id: "eqSN-DB", title: "Diourbel", parent: "eqSN" },
    { id: "eqSN-FK", title: "Fatick", parent: "eqSN" },
    { id: "eqSN-KL", title: "Kaolack", parent: "eqSN" },
    { id: "eqSN-KD", title: "Kolda", parent: "eqSN" },
    { id: "eqSN-LG", title: "Louga", parent: "eqSN" },
    { id: "eqSN-SL", title: "Saint-Louis", parent: "eqSN" },
    { id: "eqSN-TC", title: "Tambacounda", parent: "eqSN" },
    { id: "eqSN-TH", title: "Thiès", parent: "eqSN" },
    { id: "eqSN-ZG", title: "Ziguinchor", parent: "eqSN" },
    { id: "eqSC", title: "Seychelles", parent: null },
    { id: "eqSC-SC", title: "Seychelles", parent: "eqSC" },
    { id: "eqSL", title: "Sierra Leone", parent: null },
    {
        id: "eqSL-W",
        title: "Western Area (Freetown)",
        parent: "eqSL"
    },
    { id: "eqSL-E", title: "Eastern", parent: "eqSL" },
    { id: "eqSL-N", title: "Northern", parent: "eqSL" },
    { id: "eqSL-S", title: "Southern", parent: "eqSL" },
    { id: "eqSG", title: "Singapore", parent: null },
    { id: "eqSG-SG", title: "Singapore", parent: "eqSG" },
    { id: "eqSK", title: "Slovak Republic", parent: null },
    {
        id: "eqSK-BC",
        title: "Banskobystrický kraj",
        parent: "eqSK"
    },
    {
        id: "eqSK-BL",
        title: "Bratislavský kraj",
        parent: "eqSK"
    },
    { id: "eqSK-KI", title: "Košický kraj", parent: "eqSK" },
    { id: "eqSK-NI", title: "Nitriansky kraj", parent: "eqSK" },
    { id: "eqSK-PV", title: "Prešovský kraj", parent: "eqSK" },
    { id: "eqSK-TC", title: "Trenciansky kraj", parent: "eqSK" },
    { id: "eqSK-TA", title: "Trnavský kraj", parent: "eqSK" },
    { id: "eqSK-ZI", title: "Žilinský kraj", parent: "eqSK" },
    { id: "eqSI", title: "Slovenia", parent: null },
    { id: "eqSI-07", title: "Dolenjska", parent: "eqSI" },
    { id: "eqSI-09", title: "Gorenjska", parent: "eqSI" },
    { id: "eqSI-11", title: "Goriška", parent: "eqSI" },
    { id: "eqSI-03", title: "Koroška", parent: "eqSI" },
    {
        id: "eqSI-10",
        title: "Notranjsko-kraška",
        parent: "eqSI"
    },
    { id: "eqSI-12", title: "Obalno-kraška", parent: "eqSI" },
    {
        id: "eqSI-08",
        title: "Osrednjeslovenska",
        parent: "eqSI"
    },
    { id: "eqSI-02", title: "Podravska", parent: "eqSI" },
    { id: "eqSI-01", title: "Pomurska", parent: "eqSI" },
    { id: "eqSI-04", title: "Savinjska", parent: "eqSI" },
    { id: "eqSI-06", title: "Spodnjeposavska", parent: "eqSI" },
    { id: "eqSI-05", title: "Zasavska", parent: "eqSI" },
    { id: "eqSB", title: "Solomon Islands", parent: null },
    {
        id: "eqSB-CT",
        title: "Capital Territory (Honiara)",
        parent: "eqSB"
    },
    { id: "eqSB-CE", title: "Central", parent: "eqSB" },
    { id: "eqSB-GU", title: "Guadalcanal", parent: "eqSB" },
    { id: "eqSB-IS", title: "Isabel", parent: "eqSB" },
    { id: "eqSB-MK", title: "Makira", parent: "eqSB" },
    { id: "eqSB-ML", title: "Malaita", parent: "eqSB" },
    { id: "eqSB-TE", title: "Temotu", parent: "eqSB" },
    { id: "eqSB-WE", title: "Western", parent: "eqSB" },
    { id: "eqSO", title: "Somalia", parent: null },
    { id: "eqSO-AW", title: "Awdal", parent: "eqSO" },
    { id: "eqSO-BK", title: "Bakool", parent: "eqSO" },
    { id: "eqSO-BN", title: "Banaadir", parent: "eqSO" },
    { id: "eqSO-BR", title: "Bari", parent: "eqSO" },
    { id: "eqSO-BY", title: "BaY", parent: "eqSO" },
    { id: "eqSO-GA", title: "Galguduud", parent: "eqSO" },
    { id: "eqSO-GE", title: "Gedo", parent: "eqSO" },
    { id: "eqSO-HI", title: "Hiiraan", parent: "eqSO" },
    { id: "eqSO-JD", title: "Jubbada Dhexe", parent: "eqSO" },
    { id: "eqSO-JH", title: "Jubbada Hoose", parent: "eqSO" },
    { id: "eqSO-MU", title: "Mudug", parent: "eqSO" },
    { id: "eqSO-NU", title: "Nugaal", parent: "eqSO" },
    { id: "eqSO-SA", title: "Sanaag", parent: "eqSO" },
    {
        id: "eqSO-SD",
        title: "Shabeellaha Dhexe",
        parent: "eqSO"
    },
    {
        id: "eqSO-SH",
        title: "Shabeellaha Hoose",
        parent: "eqSO"
    },
    { id: "eqSO-SO", title: "Sool", parent: "eqSO" },
    { id: "eqSO-TO", title: "Togdheer", parent: "eqSO" },
    { id: "eqSO-WO", title: "Woqooyi Galbeed", parent: "eqSO" },
    { id: "eqZA", title: "South Africa", parent: null },
    {
        id: "eqZA-EC",
        title: "Eastern Cape (Oos-Kaap)",
        parent: "eqZA"
    },
    {
        id: "eqZA-FS",
        title: "Free State (Vrystaat)",
        parent: "eqZA"
    },
    { id: "eqZA-GT", title: "Gauteng", parent: "eqZA" },
    { id: "eqZA-NL", title: "Kwazulu-Natal", parent: "eqZA" },
    { id: "eqZA-MP", title: "Mpumalanga", parent: "eqZA" },
    {
        id: "eqZA-NC",
        title: "Northern Cape (Noord-Kaap)",
        parent: "eqZA"
    },
    {
        id: "eqZA-NP",
        title: "Northern Province (Noordelike Provinsie)",
        parent: "eqZA"
    },
    {
        id: "eqZA-NW",
        title: "North-West (Noord-Wes)",
        parent: "eqZA"
    },
    {
        id: "eqZA-WC",
        title: "Western Cape (Wes-Kaap)",
        parent: "eqZA"
    },
    { id: "eqES", title: "Spain", parent: null },
    { id: "eqES-AN", title: "Andalucía", parent: "eqES" },
    { id: "eqES-AL", title: "Almería", parent: "eqES-AN" },
    { id: "eqES-CA", title: "Cádiz", parent: "eqES-AN" },
    { id: "eqES-CO", title: "Córdoba", parent: "eqES-AN" },
    { id: "eqES-GR", title: "Granada", parent: "eqES-AN" },
    { id: "eqES-H", title: "Huelva", parent: "eqES-AN" },
    { id: "eqES-J", title: "Jaén", parent: "eqES-AN" },
    { id: "eqES-MA", title: "Málaga", parent: "eqES-AN" },
    { id: "eqES-SE", title: "Sevilla", parent: "eqES-AN" },
    { id: "eqES-AR", title: "Aragón", parent: "eqES" },
    { id: "eqES-HU", title: "Huesca", parent: "eqES-AR" },
    { id: "eqES-TE", title: "Teruel", parent: "eqES-AR" },
    { id: "eqES-Z", title: "Zaragoza", parent: "eqES-AR" },
    {
        id: "eqES-O",
        title: "Asturias, Principado de",
        parent: "eqES"
    },
    { id: "eqES-CN", title: "Canarias", parent: "eqES" },
    { id: "eqES-GC", title: "Las Palmas", parent: "eqES-CN" },
    {
        id: "eqES-TF",
        title: "Santa Cruz De Tenerife",
        parent: "eqES-CN"
    },
    { id: "eqES-S", title: "Cantabria", parent: "eqES" },
    {
        id: "eqES-CM",
        title: "Castilla-La Mancha",
        parent: "eqES"
    },
    { id: "eqES-AB", title: "Albacete", parent: "eqES-CM" },
    { id: "eqES-CR", title: "Ciudad Real", parent: "eqES-CM" },
    { id: "eqES-CU", title: "Cuenca", parent: "eqES-CM" },
    { id: "eqES-GU", title: "Guadalajara", parent: "eqES-CM" },
    { id: "eqES-TO", title: "Toledo", parent: "eqES-CM" },
    { id: "eqES-CL", title: "Castilla y León", parent: "eqES" },
    { id: "eqES-AV", title: "Ávila", parent: "eqES-CL" },
    { id: "eqES-BU", title: "Burgos", parent: "eqES-CL" },
    { id: "eqES-LE", title: "León", parent: "eqES-CL" },
    { id: "eqES-P", title: "Palencia", parent: "eqES-CL" },
    { id: "eqES-SA", title: "Salamanca", parent: "eqES-CL" },
    { id: "eqES-SG", title: "Segovia", parent: "eqES-CL" },
    { id: "eqES-SO", title: "Soria", parent: "eqES-CL" },
    { id: "eqES-VA", title: "Valladolid", parent: "eqES-CL" },
    { id: "eqES-ZA", title: "Zamora", parent: "eqES-CL" },
    { id: "eqES-CT", title: "Cataluña", parent: "eqES" },
    { id: "eqES-B", title: "Barcelona", parent: "eqES-CT" },
    { id: "eqES-GE", title: "Gerona", parent: "eqES-CT" },
    { id: "eqES-L", title: "Lérida", parent: "eqES-CT" },
    { id: "eqES-T", title: "Tarragona", parent: "eqES-CT" },
    { id: "eqES-EX", title: "Extremadura", parent: "eqES" },
    { id: "eqES-BA", title: "Badajoz", parent: "eqES-EX" },
    { id: "eqES-CC", title: "Cáceres", parent: "eqES-EX" },
    { id: "eqES-GA", title: "Galicia", parent: "eqES" },
    { id: "eqES-C", title: "La Coruña", parent: "eqES-GA" },
    { id: "eqES-LU", title: "Lugo", parent: "eqES-GA" },
    { id: "eqES-OR", title: "Orense", parent: "eqES-GA" },
    { id: "eqES-PO", title: "Pontevedra", parent: "eqES-GA" },
    { id: "eqES-PM", title: "Islas Baleares", parent: "eqES" },
    { id: "eqES-LO", title: "La Rioja", parent: "eqES" },
    {
        id: "eqES-M",
        title: "Madrid, Comunidad de",
        parent: "eqES"
    },
    {
        id: "eqES-MU",
        title: "Murcia, Región de",
        parent: "eqES"
    },
    {
        id: "eqES-NA",
        title: "Navarra, Comunidad Foral de",
        parent: "eqES"
    },
    { id: "eqES-PV", title: "País Vasco", parent: "eqES" },
    { id: "eqES-VI", title: "Álava", parent: "eqES-PV" },
    { id: "eqES-SS", title: "Guipúzcoa", parent: "eqES-PV" },
    { id: "eqES-BI", title: "Vizcaya", parent: "eqES-PV" },
    {
        id: "eqES-VC",
        title: "Valenciana, Comunidad",
        parent: "eqES"
    },
    { id: "eqES-A", title: "Alicante", parent: "eqES-VC" },
    { id: "eqES-CS", title: "Castellón", parent: "eqES-VC" },
    { id: "eqES-V", title: "Valencia", parent: "eqES-VC" },
    { id: "eqLK", title: "Sri Lanka", parent: null },
    {
        id: "eqLK-1",
        title: "Basnahira Palata (Western Province)",
        parent: "eqLK"
    },
    { id: "eqLK-11", title: "Colombo", parent: "eqLK-1" },
    { id: "eqLK-12", title: "Gampaha", parent: "eqLK-1" },
    { id: "eqLK-13", title: "Kalutara", parent: "eqLK-1" },
    {
        id: "eqLK-3",
        title: "Dakunu Palata (Southern Province)",
        parent: "eqLK"
    },
    { id: "eqLK-31", title: "Galle", parent: "eqLK-3" },
    { id: "eqLK-33", title: "Hambantota", parent: "eqLK-3" },
    { id: "eqLK-32", title: "Matara", parent: "eqLK-3" },
    {
        id: "eqLK-2",
        title: "Madhyama Palata (Central Province)",
        parent: "eqLK"
    },
    { id: "eqLK-21", title: "Kandy", parent: "eqLK-2" },
    { id: "eqLK-22", title: "Matale", parent: "eqLK-2" },
    { id: "eqLK-23", title: "Nuwara Eliya", parent: "eqLK-2" },
    {
        id: "eqLK-5",
        title: "Negenahira Palata (Eastern Province)",
        parent: "eqLK"
    },
    { id: "eqLK-52", title: "Arnpara", parent: "eqLK-5" },
    { id: "eqLK-51", title: "Batticaloa", parent: "eqLK-5" },
    { id: "eqLK-53", title: "Trincomalee", parent: "eqLK-5" },
    {
        id: "eqLK-9",
        title: "Sabaragamuwa Palata",
        parent: "eqLK"
    },
    { id: "eqLK-92", title: "Kegalla", parent: "eqLK-9" },
    { id: "eqLK-91", title: "Ratnapura", parent: "eqLK-9" },
    {
        id: "eqLK-7",
        title: "Uturumeda Palata (North Central Province)",
        parent: "eqLK"
    },
    { id: "eqLK-71", title: "Anuradhapura", parent: "eqLK-7" },
    { id: "eqLK-72", title: "Polonnaruwa", parent: "eqLK-7" },
    {
        id: "eqLK-4",
        title: "Uturu Palata (Northern Province)",
        parent: "eqLK"
    },
    { id: "eqLK-41", title: "Jaffna", parent: "eqLK-4" },
    { id: "eqLK-42", title: "Kilinochchi", parent: "eqLK-4" },
    { id: "eqLK-43", title: "Mannar", parent: "eqLK-4" },
    { id: "eqLK-45", title: "Mullaittivu", parent: "eqLK-4" },
    { id: "eqLK-44", title: "Vavuniya", parent: "eqLK-4" },
    { id: "eqLK-8", title: "Uva Palata", parent: "eqLK" },
    { id: "eqLK-81", title: "Badulla", parent: "eqLK-8" },
    { id: "eqLK-82", title: "Monaragala", parent: "eqLK-8" },
    {
        id: "eqLK-6",
        title: "Wayamba Palata (North Western Province)",
        parent: "eqLK"
    },
    { id: "eqLK-61", title: "Kurunegala", parent: "eqLK-6" },
    { id: "eqLK-62", title: "Puttalam", parent: "eqLK-6" },
    { id: "eqSH", title: "St. Helena", parent: null },
    { id: "eqSH-SH", title: "Saint Helena", parent: "eqSH" },
    { id: "eqSH-AC", title: "Ascension", parent: "eqSH" },
    { id: "eqSH-TA", title: "Tristan da Cunha", parent: "eqSH" },
    {
        id: "eqPM",
        title: "St. Pierre & Miquelon",
        parent: null
    },
    {
        id: "eqPM-PM",
        title: "St. Pierre & Miquelon",
        parent: "eqPM"
    },
    {
        id: "eqVC",
        title: "St. Vincent & the Grenadines",
        parent: null
    },
    {
        id: "eqVC-VC",
        title: "St. Vincent & the Grenadines",
        parent: "eqVC"
    },
    { id: "eqSD", title: "Sudan", parent: null },
    { id: "eqSD-23", title: "A‘ali an Nil", parent: "eqSD" },
    { id: "eqSD-26", title: "Al Ba?r al A?mar", parent: "eqSD" },
    { id: "eqSD-18", title: "Al Bu?ayrat", parent: "eqSD" },
    { id: "eqSD-07", title: "Al Jazirah", parent: "eqSD" },
    { id: "eqSD-03", title: "Al Khartum", parent: "eqSD" },
    { id: "eqSD-06", title: "Al Qa?arif", parent: "eqSD" },
    { id: "eqSD-22", title: "Al Wa?dah", parent: "eqSD" },
    { id: "eqSD-04", title: "An Nil", parent: "eqSD" },
    { id: "eqSD-08", title: "An Nil al Abya?", parent: "eqSD" },
    { id: "eqSD-24", title: "An Nil al Azraq", parent: "eqSD" },
    { id: "eqSD-01", title: "Ash Shamaliyah", parent: "eqSD" },
    { id: "eqSD-17", title: "Ba?r al Jabal", parent: "eqSD" },
    {
        id: "eqSD-16",
        title: "Gharb al Istiwa'iyah",
        parent: "eqSD"
    },
    {
        id: "eqSD-14",
        title: "Gharb Ba?r al Ghazal",
        parent: "eqSD"
    },
    { id: "eqSD-12", title: "Gharb Darfur", parent: "eqSD" },
    { id: "eqSD-10", title: "Gharb Kurdufan", parent: "eqSD" },
    { id: "eqSD-11", title: "Janub Darfur", parent: "eqSD" },
    { id: "eqSD-13", title: "Janub Kurdufan", parent: "eqSD" },
    { id: "eqSD-20", title: "Junqali", parent: "eqSD" },
    { id: "eqSD-05", title: "Kassala", parent: "eqSD" },
    {
        id: "eqSD-15",
        title: "Shamal Ba?r al Ghazal",
        parent: "eqSD"
    },
    { id: "eqSD-02", title: "Shamal Darfur", parent: "eqSD" },
    { id: "eqSD-09", title: "Shamal Kurdufan", parent: "eqSD" },
    {
        id: "eqSD-19",
        title: "Sharq al Istiwa'iyah",
        parent: "eqSD"
    },
    { id: "eqSD-25", title: "Sinnar", parent: "eqSD" },
    { id: "eqSD-21", title: "Warab", parent: "eqSD" },
    { id: "eqSR", title: "Suriname", parent: null },
    { id: "eqSR-BR", title: "Brokopondo", parent: "eqSR" },
    { id: "eqSR-CM", title: "Commewijne", parent: "eqSR" },
    { id: "eqSR-CR", title: "Coronie", parent: "eqSR" },
    { id: "eqSR-MA", title: "Marowijne", parent: "eqSR" },
    { id: "eqSR-NI", title: "Nickerie", parent: "eqSR" },
    { id: "eqSR-PR", title: "Para", parent: "eqSR" },
    { id: "eqSR-PM", title: "Paramaribo", parent: "eqSR" },
    { id: "eqSR-SA", title: "Saramacca", parent: "eqSR" },
    { id: "eqSR-SI", title: "Sipaliwini", parent: "eqSR" },
    { id: "eqSR-WA", title: "Wanica", parent: "eqSR" },
    {
        id: "eqSJ",
        title: "Svalbard & Jan Mayen Islands",
        parent: null
    },
    {
        id: "eqSJ-SJ",
        title: "Svalbard & Jan Mayen Islands",
        parent: "eqSJ"
    },
    { id: "eqSZ", title: "Swaziland", parent: null },
    { id: "eqSZ-HH", title: "Hhohho", parent: "eqSZ" },
    { id: "eqSZ-LU", title: "Lubombo", parent: "eqSZ" },
    { id: "eqSZ-MA", title: "Manzini", parent: "eqSZ" },
    { id: "eqSZ-SH", title: "Shiselweni", parent: "eqSZ" },
    { id: "eqSE", title: "Sweden", parent: null },
    { id: "eqSE-K", title: "Blekinge län", parent: "eqSE" },
    { id: "eqSE-W", title: "Dalarnas län", parent: "eqSE" },
    { id: "eqSE-I", title: "Gotlands län", parent: "eqSE" },
    { id: "eqSE-X", title: "Gävleborgs län", parent: "eqSE" },
    { id: "eqSE-N", title: "Hallands län", parent: "eqSE" },
    { id: "eqSE-Z", title: "Jämtlands län", parent: "eqSE" },
    { id: "eqSE-F", title: "Jönköpings län", parent: "eqSE" },
    { id: "eqSE-H", title: "Kalmar län", parent: "eqSE" },
    { id: "eqSE-G", title: "Kronobergs län", parent: "eqSE" },
    { id: "eqSE-BD", title: "Norrbottens län", parent: "eqSE" },
    { id: "eqSE-M", title: "Skåne län", parent: "eqSE" },
    { id: "eqSE-AB", title: "Stockholms län", parent: "eqSE" },
    { id: "eqSE-D", title: "Södermanlands län", parent: "eqSE" },
    { id: "eqSE-C", title: "Uppsala län", parent: "eqSE" },
    { id: "eqSE-S", title: "Värmlands län", parent: "eqSE" },
    {
        id: "eqSE-AC",
        title: "Västerbottens län",
        parent: "eqSE"
    },
    {
        id: "eqSE-Y",
        title: "Västernorrlands län",
        parent: "eqSE"
    },
    { id: "eqSE-U", title: "Västmanlands län", parent: "eqSE" },
    {
        id: "eqSE-O",
        title: "Västra Götalands län",
        parent: "eqSE"
    },
    { id: "eqSE-T", title: "Örebro län", parent: "eqSE" },
    { id: "eqSE-E", title: "Östergötlands län", parent: "eqSE" },
    { id: "eqCH", title: "Switzerland", parent: null },
    { id: "eqCH-AG", title: "Aargau", parent: "eqCH" },
    {
        id: "eqCH-AR",
        title: "Appenzell Ausser-Rhoden",
        parent: "eqCH"
    },
    {
        id: "eqCH-AI",
        title: "Appenzell Inner-Rhoden",
        parent: "eqCH"
    },
    { id: "eqCH-BL", title: "Basel-Landschaft", parent: "eqCH" },
    { id: "eqCH-BS", title: "Basel-Stadt", parent: "eqCH" },
    { id: "eqCH-BE", title: "Bern", parent: "eqCH" },
    { id: "eqCH-FR", title: "Freiburg", parent: "eqCH" },
    { id: "eqCH-GE", title: "Geneve", parent: "eqCH" },
    { id: "eqCH-GL", title: "Glarus", parent: "eqCH" },
    { id: "eqCH-GR", title: "Graubünden", parent: "eqCH" },
    { id: "eqCH-JU", title: "Jura", parent: "eqCH" },
    { id: "eqCH-LU", title: "Luzern", parent: "eqCH" },
    { id: "eqCH-NE", title: "Neuchatel", parent: "eqCH" },
    { id: "eqCH-NW", title: "Nidwalden", parent: "eqCH" },
    { id: "eqCH-OW", title: "Obwalden", parent: "eqCH" },
    { id: "eqCH-SG", title: "Sankt Gallen", parent: "eqCH" },
    { id: "eqCH-SH", title: "Schaffhausen", parent: "eqCH" },
    { id: "eqCH-SZ", title: "Schwyz", parent: "eqCH" },
    { id: "eqCH-SO", title: "Solothurn", parent: "eqCH" },
    { id: "eqCH-TG", title: "Thurgau", parent: "eqCH" },
    { id: "eqCH-TI", title: "Ticino", parent: "eqCH" },
    { id: "eqCH-UR", title: "Uri", parent: "eqCH" },
    { id: "eqCH-VS", title: "Wallis", parent: "eqCH" },
    { id: "eqCH-VD", title: "Vaud", parent: "eqCH" },
    { id: "eqCH-ZG", title: "Zug", parent: "eqCH" },
    { id: "eqCH-ZH", title: "Zürich", parent: "eqCH" },
    { id: "eqSY", title: "Syria", parent: null },
    { id: "eqSY-HA", title: "Al ?asakah", parent: "eqSY" },
    { id: "eqSY-LA", title: "Al Ladhiqiyah", parent: "eqSY" },
    { id: "eqSY-QU", title: "Al Qunaytirah", parent: "eqSY" },
    { id: "eqSY-RA", title: "Ar Raqqah", parent: "eqSY" },
    { id: "eqSY-SU", title: "As Suwayda'", parent: "eqSY" },
    { id: "eqSY-DR", title: "Dar’a", parent: "eqSY" },
    { id: "eqSY-DY", title: "Dayr az Zawr", parent: "eqSY" },
    { id: "eqSY-DI", title: "Dimashq", parent: "eqSY" },
    { id: "eqSY-HL", title: "?alab", parent: "eqSY" },
    { id: "eqSY-HM", title: "?amah", parent: "eqSY" },
    { id: "eqSY-HI", title: "?ims", parent: "eqSY" },
    { id: "eqSY-ID", title: "Idlib", parent: "eqSY" },
    { id: "eqSY-RD", title: "Rif Dimashq", parent: "eqSY" },
    { id: "eqSY-TA", title: "Tartus", parent: "eqSY" },
    { id: "eqTW", title: "Taiwan", parent: null },
    { id: "eqTW-KHH", title: "Kaohsiung", parent: "eqTW" },
    { id: "eqTW-TPE", title: "Taipei", parent: "eqTW" },
    { id: "eqTW-CYI", title: "Chiayi", parent: "eqTW" },
    { id: "eqTW-HSZ", title: "Hsinchu", parent: "eqTW" },
    { id: "eqTW-KEE", title: "Keelung", parent: "eqTW" },
    { id: "eqTW-TXG", title: "Taichung", parent: "eqTW" },
    { id: "eqTW-TNN", title: "Tainan", parent: "eqTW" },
    { id: "eqTW-CHA", title: "Changhua", parent: "eqTW" },
    { id: "eqTW-HUA", title: "Hualien", parent: "eqTW" },
    { id: "eqTW-ILA", title: "Ilan", parent: "eqTW" },
    { id: "eqTW-MIA", title: "Miaoli", parent: "eqTW" },
    { id: "eqTW-NAN", title: "Nantou", parent: "eqTW" },
    { id: "eqTW-PEN", title: "Penghu", parent: "eqTW" },
    { id: "eqTW-PIF", title: "Pingtung", parent: "eqTW" },
    { id: "eqTW-TTT", title: "Taitung", parent: "eqTW" },
    { id: "eqTW-TAO", title: "Taoyuan", parent: "eqTW" },
    { id: "eqTW-YUN", title: "Yunlin", parent: "eqTW" },
    { id: "eqTJ", title: "Tajikistan", parent: null },
    { id: "eqTJ-KR", title: "Karategin", parent: "eqTJ" },
    { id: "eqTJ-KT", title: "Khatlon", parent: "eqTJ" },
    { id: "eqTJ-LN", title: "Leninabad", parent: "eqTJ" },
    { id: "eqTJ-GB", title: "Gorno-Badakhshan", parent: "eqTJ" },
    { id: "eqTZ", title: "Tanzania", parent: null },
    { id: "eqTZ-01", title: "Arusha", parent: "eqTZ" },
    { id: "eqTZ-02", title: "Dar-es-Salaam", parent: "eqTZ" },
    { id: "eqTZ-03", title: "Dodoma", parent: "eqTZ" },
    { id: "eqTZ-04", title: "Iringa", parent: "eqTZ" },
    { id: "eqTZ-05", title: "Kagera", parent: "eqTZ" },
    {
        id: "eqTZ-06",
        title: "Kaskazini Pemba (Pemba North)",
        parent: "eqTZ"
    },
    {
        id: "eqTZ-07",
        title: "Kaskazini Unguja (Zanzibar North)",
        parent: "eqTZ"
    },
    { id: "eqTZ-08", title: "Kigoma", parent: "eqTZ" },
    { id: "eqTZ-09", title: "Kilimanjaro", parent: "eqTZ" },
    {
        id: "eqTZ-10",
        title: "Kusini Pemba (Pemba South)",
        parent: "eqTZ"
    },
    {
        id: "eqTZ-11",
        title: "Kusini Unguja (Zanzibar South)",
        parent: "eqTZ"
    },
    { id: "eqTZ-12", title: "Lindi", parent: "eqTZ" },
    { id: "eqTZ-13", title: "Mara", parent: "eqTZ" },
    { id: "eqTZ-14", title: "Mbeya", parent: "eqTZ" },
    {
        id: "eqTZ-15",
        title: "Mjini Magharibi (Zanzibar West)",
        parent: "eqTZ"
    },
    { id: "eqTZ-16", title: "Morogoro", parent: "eqTZ" },
    { id: "eqTZ-17", title: "Mtwara", parent: "eqTZ" },
    { id: "eqTZ-18", title: "Mwanza", parent: "eqTZ" },
    { id: "eqTZ-19", title: "Pwani (Coast)", parent: "eqTZ" },
    { id: "eqTZ-20", title: "Rukwa", parent: "eqTZ" },
    { id: "eqTZ-21", title: "Ruvuma", parent: "eqTZ" },
    { id: "eqTZ-22", title: "Shinyanga", parent: "eqTZ" },
    { id: "eqTZ-23", title: "Singida", parent: "eqTZ" },
    { id: "eqTZ-24", title: "Tabora", parent: "eqTZ" },
    { id: "eqTZ-25", title: "Tanga", parent: "eqTZ" },
    { id: "eqTH", title: "Thailand", parent: null },
    {
        id: "eqTH-10",
        title: "Krung Thep Maha Nakhon [Bangkok]",
        parent: "eqTH"
    },
    { id: "eqTH-S", title: "Phatthaya", parent: "eqTH" },
    { id: "eqTH-37", title: "Amnat Charoen", parent: "eqTH" },
    { id: "eqTH-15", title: "Ang Thong", parent: "eqTH" },
    { id: "eqTH-31", title: "Buri Ram", parent: "eqTH" },
    { id: "eqTH-24", title: "Chachoengsao", parent: "eqTH" },
    { id: "eqTH-18", title: "Chai Nat", parent: "eqTH" },
    { id: "eqTH-36", title: "Chaiyaphum", parent: "eqTH" },
    { id: "eqTH-22", title: "Chanthaburi", parent: "eqTH" },
    { id: "eqTH-50", title: "Chiang Mai", parent: "eqTH" },
    { id: "eqTH-57", title: "Chiang Rai", parent: "eqTH" },
    { id: "eqTH-20", title: "Chon Buri", parent: "eqTH" },
    { id: "eqTH-86", title: "Chumphon", parent: "eqTH" },
    { id: "eqTH-46", title: "Kalasin", parent: "eqTH" },
    { id: "eqTH-62", title: "Kamphaeng Phet", parent: "eqTH" },
    { id: "eqTH-71", title: "Kanchanaburi", parent: "eqTH" },
    { id: "eqTH-40", title: "Khon Kaen", parent: "eqTH" },
    { id: "eqTH-81", title: "Krabi", parent: "eqTH" },
    { id: "eqTH-52", title: "Lampang", parent: "eqTH" },
    { id: "eqTH-51", title: "Lamphun", parent: "eqTH" },
    { id: "eqTH-42", title: "Loei", parent: "eqTH" },
    { id: "eqTH-16", title: "Lop Buri", parent: "eqTH" },
    { id: "eqTH-58", title: "Mae Hong Son", parent: "eqTH" },
    { id: "eqTH-44", title: "Maha Sarakham", parent: "eqTH" },
    { id: "eqTH-49", title: "Mukdahan", parent: "eqTH" },
    { id: "eqTH-26", title: "Nakhon Nayok", parent: "eqTH" },
    { id: "eqTH-73", title: "Nakhon Pathom", parent: "eqTH" },
    { id: "eqTH-48", title: "Nakhon Phanom", parent: "eqTH" },
    {
        id: "eqTH-30",
        title: "Nakhon Ratchasima",
        parent: "eqTH"
    },
    { id: "eqTH-60", title: "Nakhon Sawan", parent: "eqTH" },
    {
        id: "eqTH-80",
        title: "Nakhon Si Thammarat",
        parent: "eqTH"
    },
    { id: "eqTH-55", title: "Nan", parent: "eqTH" },
    { id: "eqTH-96", title: "Narathiwat", parent: "eqTH" },
    { id: "eqTH-39", title: "Nong Bua Lam Phu", parent: "eqTH" },
    { id: "eqTH-43", title: "Nong Khai", parent: "eqTH" },
    { id: "eqTH-12", title: "Nonthaburi", parent: "eqTH" },
    { id: "eqTH-13", title: "Pathum Thani", parent: "eqTH" },
    { id: "eqTH-94", title: "Pattani", parent: "eqTH" },
    { id: "eqTH-82", title: "Phangnga", parent: "eqTH" },
    { id: "eqTH-93", title: "Phatthalung", parent: "eqTH" },
    { id: "eqTH-56", title: "Phayao", parent: "eqTH" },
    { id: "eqTH-67", title: "Phetchabun", parent: "eqTH" },
    { id: "eqTH-76", title: "Phetchaburi", parent: "eqTH" },
    { id: "eqTH-66", title: "Phichit", parent: "eqTH" },
    { id: "eqTH-65", title: "Phitsanulok", parent: "eqTH" },
    { id: "eqTH-54", title: "Phrae", parent: "eqTH" },
    {
        id: "eqTH-14",
        title: "Phra Nakhon Si Ayutthaya",
        parent: "eqTH"
    },
    { id: "eqTH-83", title: "Phuket", parent: "eqTH" },
    { id: "eqTH-25", title: "Prachin Buri", parent: "eqTH" },
    {
        id: "eqTH-77",
        title: "Prachuap Khiri Khan",
        parent: "eqTH"
    },
    { id: "eqTH-85", title: "Ranong", parent: "eqTH" },
    { id: "eqTH-70", title: "Ratchaburi", parent: "eqTH" },
    { id: "eqTH-21", title: "Rayong", parent: "eqTH" },
    { id: "eqTH-45", title: "Roi Et", parent: "eqTH" },
    { id: "eqTH-27", title: "Sa Kaeo", parent: "eqTH" },
    { id: "eqTH-47", title: "Sakon Nakhon", parent: "eqTH" },
    { id: "eqTH-11", title: "Samut Prakan", parent: "eqTH" },
    { id: "eqTH-74", title: "Samut Sakhon", parent: "eqTH" },
    { id: "eqTH-75", title: "Samut Songkhram", parent: "eqTH" },
    { id: "eqTH-19", title: "Saraburi", parent: "eqTH" },
    { id: "eqTH-91", title: "Satun", parent: "eqTH" },
    { id: "eqTH-17", title: "Sing Buri", parent: "eqTH" },
    { id: "eqTH-33", title: "Si Sa Ket", parent: "eqTH" },
    { id: "eqTH-90", title: "Songkhla", parent: "eqTH" },
    { id: "eqTH-64", title: "Sukhothai", parent: "eqTH" },
    { id: "eqTH-72", title: "Suphan Buri", parent: "eqTH" },
    { id: "eqTH-84", title: "Surat Thani", parent: "eqTH" },
    { id: "eqTH-32", title: "Surin", parent: "eqTH" },
    { id: "eqTH-63", title: "Tak", parent: "eqTH" },
    { id: "eqTH-92", title: "Trang", parent: "eqTH" },
    { id: "eqTH-23", title: "Trat", parent: "eqTH" },
    { id: "eqTH-34", title: "Ubon Ratchathani", parent: "eqTH" },
    { id: "eqTH-41", title: "Udon Thani", parent: "eqTH" },
    { id: "eqTH-61", title: "Uthai Thani", parent: "eqTH" },
    { id: "eqTH-53", title: "Uttaradit", parent: "eqTH" },
    { id: "eqTH-95", title: "Yala", parent: "eqTH" },
    { id: "eqTH-35", title: "Yasothon", parent: "eqTH" },
    { id: "eqTG", title: "Togo", parent: null },
    { id: "eqTG-C", title: "Centre", parent: "eqTG" },
    { id: "eqTG-K", title: "Kara", parent: "eqTG" },
    { id: "eqTG-M", title: "Maritime (Région)", parent: "eqTG" },
    { id: "eqTG-P", title: "Plateaux", parent: "eqTG" },
    { id: "eqTG-S", title: "Savannes", parent: "eqTG" },
    { id: "eqTK", title: "Tokelau", parent: null },
    { id: "eqTK-TK", title: "Tokelau", parent: "eqTK" },
    { id: "eqTO", title: "Tonga", parent: null },
    { id: "eqTO-TO", title: "Tonga", parent: "eqTO" },
    { id: "eqTT", title: "Trinidad & Tobago", parent: null },
    {
        id: "eqTT-CTT",
        title: "Couva-Tabaquite-Talparo",
        parent: "eqTT"
    },
    { id: "eqTT-DMN", title: "Diego Martin", parent: "eqTT" },
    { id: "eqTT-ETO", title: "Eastern Tobago", parent: "eqTT" },
    { id: "eqTT-PED", title: "Penal-Debe", parent: "eqTT" },
    { id: "eqTT-PRT", title: "Princes Town", parent: "eqTT" },
    {
        id: "eqTT-RCM",
        title: "Rio Claro-Mayaro",
        parent: "eqTT"
    },
    { id: "eqTT-SGE", title: "Sangre Grande", parent: "eqTT" },
    {
        id: "eqTT-SJL",
        title: "San Juan-Laventille",
        parent: "eqTT"
    },
    { id: "eqTT-SIP", title: "Siparia", parent: "eqTT" },
    { id: "eqTT-TUP", title: "Tunapuna-Piarco", parent: "eqTT" },
    { id: "eqTT-WTO", title: "Western Tobago", parent: "eqTT" },
    { id: "eqTT-ARI", title: "Arima", parent: "eqTT" },
    { id: "eqTT-CHA", title: "Chaguanas", parent: "eqTT" },
    { id: "eqTT-PTF", title: "Point Fortin", parent: "eqTT" },
    { id: "eqTT-POS", title: "Port of Spain", parent: "eqTT" },
    { id: "eqTT-SFO", title: "San Fernando", parent: "eqTT" },
    { id: "eqTN", title: "Tunisia", parent: null },
    { id: "eqTN-31", title: "Béja", parent: "eqTN" },
    { id: "eqTN-13", title: "Ben Arous", parent: "eqTN" },
    { id: "eqTN-23", title: "Bizerte", parent: "eqTN" },
    { id: "eqTN-81", title: "Gabès", parent: "eqTN" },
    { id: "eqTN-71", title: "Gafsa", parent: "eqTN" },
    { id: "eqTN-32", title: "Jendouba", parent: "eqTN" },
    { id: "eqTN-41", title: "Kairouan", parent: "eqTN" },
    { id: "eqTN-42", title: "Kasserine", parent: "eqTN" },
    { id: "eqTN-73", title: "Kebili", parent: "eqTN" },
    { id: "eqTN-12", title: "L'Ariana", parent: "eqTN" },
    { id: "eqTN-33", title: "Le Kef", parent: "eqTN" },
    { id: "eqTN-53", title: "Mahdia", parent: "eqTN" },
    { id: "eqTN-82", title: "Medenine", parent: "eqTN" },
    { id: "eqTN-52", title: "Monastir", parent: "eqTN" },
    { id: "eqTN-21", title: "Nabeul", parent: "eqTN" },
    { id: "eqTN-61", title: "Sfax", parent: "eqTN" },
    { id: "eqTN-43", title: "Sidi Bouzid", parent: "eqTN" },
    { id: "eqTN-34", title: "Siliana", parent: "eqTN" },
    { id: "eqTN-51", title: "Sousse", parent: "eqTN" },
    { id: "eqTN-83", title: "Tataouine", parent: "eqTN" },
    { id: "eqTN-72", title: "Tozeur", parent: "eqTN" },
    { id: "eqTN-11", title: "Tunis", parent: "eqTN" },
    { id: "eqTN-22", title: "Zaghouan", parent: "eqTN" },
    { id: "eqTR", title: "Turkey", parent: null },
    { id: "eqTR-01", title: "Adana", parent: "eqTR" },
    { id: "eqTR-02", title: "Adiyaman", parent: "eqTR" },
    { id: "eqTR-03", title: "Afyon", parent: "eqTR" },
    { id: "eqTR-04", title: "Agri", parent: "eqTR" },
    { id: "eqTR-68", title: "Aksaray", parent: "eqTR" },
    { id: "eqTR-05", title: "Amasya", parent: "eqTR" },
    { id: "eqTR-06", title: "Ankara", parent: "eqTR" },
    { id: "eqTR-07", title: "Antalya", parent: "eqTR" },
    { id: "eqTR-75", title: "Ardahan", parent: "eqTR" },
    { id: "eqTR-08", title: "Artvin", parent: "eqTR" },
    { id: "eqTR-09", title: "Aydin", parent: "eqTR" },
    { id: "eqTR-10", title: "Balikesir", parent: "eqTR" },
    { id: "eqTR-74", title: "Bartin", parent: "eqTR" },
    { id: "eqTR-72", title: "Batman", parent: "eqTR" },
    { id: "eqTR-69", title: "Bayburt", parent: "eqTR" },
    { id: "eqTR-11", title: "Bilecik", parent: "eqTR" },
    { id: "eqTR-12", title: "Bingöl", parent: "eqTR" },
    { id: "eqTR-13", title: "Bitlis", parent: "eqTR" },
    { id: "eqTR-14", title: "Bolu", parent: "eqTR" },
    { id: "eqTR-15", title: "Burdur", parent: "eqTR" },
    { id: "eqTR-16", title: "Bursa", parent: "eqTR" },
    { id: "eqTR-17", title: "Çanakkale", parent: "eqTR" },
    { id: "eqTR-18", title: "Çankiri", parent: "eqTR" },
    { id: "eqTR-19", title: "Çorum", parent: "eqTR" },
    { id: "eqTR-20", title: "Denizli", parent: "eqTR" },
    { id: "eqTR-21", title: "Diyarbakir", parent: "eqTR" },
    { id: "eqTR-22", title: "Edirne", parent: "eqTR" },
    { id: "eqTR-23", title: "Elazig", parent: "eqTR" },
    { id: "eqTR-24", title: "Erzincan", parent: "eqTR" },
    { id: "eqTR-25", title: "Erzurum", parent: "eqTR" },
    { id: "eqTR-26", title: "Eskisehir", parent: "eqTR" },
    { id: "eqTR-27", title: "Gaziantep", parent: "eqTR" },
    { id: "eqTR-28", title: "Giresun", parent: "eqTR" },
    { id: "eqTR-29", title: "Gümüshane", parent: "eqTR" },
    { id: "eqTR-30", title: "Hakkari", parent: "eqTR" },
    { id: "eqTR-31", title: "Hatay", parent: "eqTR" },
    { id: "eqTR-76", title: "Igdir", parent: "eqTR" },
    { id: "eqTR-32", title: "Isparta", parent: "eqTR" },
    { id: "eqTR-33", title: "Içel", parent: "eqTR" },
    { id: "eqTR-34", title: "Istanbul", parent: "eqTR" },
    { id: "eqTR-35", title: "Izmir", parent: "eqTR" },
    { id: "eqTR-46", title: "Kahramanmaras", parent: "eqTR" },
    { id: "eqTR-78", title: "Karabük", parent: "eqTR" },
    { id: "eqTR-70", title: "Karaman", parent: "eqTR" },
    { id: "eqTR-36", title: "Kars", parent: "eqTR" },
    { id: "eqTR-37", title: "Kastamonu", parent: "eqTR" },
    { id: "eqTR-38", title: "Kayseri", parent: "eqTR" },
    { id: "eqTR-71", title: "Kirikkale", parent: "eqTR" },
    { id: "eqTR-39", title: "Kirklareli", parent: "eqTR" },
    { id: "eqTR-40", title: "Kirsehir", parent: "eqTR" },
    { id: "eqTR-79", title: "Kilis", parent: "eqTR" },
    { id: "eqTR-41", title: "Kocaeli", parent: "eqTR" },
    { id: "eqTR-42", title: "Konya", parent: "eqTR" },
    { id: "eqTR-43", title: "Kütahya", parent: "eqTR" },
    { id: "eqTR-44", title: "Malatya", parent: "eqTR" },
    { id: "eqTR-4S", title: "Manisa", parent: "eqTR" },
    { id: "eqTR-47", title: "Mardin", parent: "eqTR" },
    { id: "eqTR-48", title: "Mugla", parent: "eqTR" },
    { id: "eqTR-49", title: "Mus", parent: "eqTR" },
    { id: "eqTR-SO", title: "Nevsehir", parent: "eqTR" },
    { id: "eqTR-51", title: "Nigde", parent: "eqTR" },
    { id: "eqTR-52", title: "Ordu", parent: "eqTR" },
    { id: "eqTR-53", title: "Rize", parent: "eqTR" },
    { id: "eqTR-54", title: "Sakarya", parent: "eqTR" },
    { id: "eqTR-SS", title: "Samsun", parent: "eqTR" },
    { id: "eqTR-56", title: "Siirt", parent: "eqTR" },
    { id: "eqTR-57", title: "Sinop", parent: "eqTR" },
    { id: "eqTR-S8", title: "Sivas", parent: "eqTR" },
    { id: "eqTR-63", title: "Sanliurfa", parent: "eqTR" },
    { id: "eqTR-73", title: "Sirnak", parent: "eqTR" },
    { id: "eqTR-59", title: "Tekirdag", parent: "eqTR" },
    { id: "eqTR-60", title: "Tokat", parent: "eqTR" },
    { id: "eqTR-61", title: "Trabzon", parent: "eqTR" },
    { id: "eqTR-62", title: "Tunceli", parent: "eqTR" },
    { id: "eqTR-64", title: "Usak", parent: "eqTR" },
    { id: "eqTR-65", title: "Van", parent: "eqTR" },
    { id: "eqTR-77", title: "Yalova", parent: "eqTR" },
    { id: "eqTR-66", title: "Yozgat", parent: "eqTR" },
    { id: "eqTR-67", title: "Zonguldak", parent: "eqTR" },
    { id: "eqTM", title: "Turkmenistan", parent: null },
    { id: "eqTM-A", title: "Ahal", parent: "eqTM" },
    { id: "eqTM-B", title: "Balkan", parent: "eqTM" },
    { id: "eqTM-D", title: "Dashowuz", parent: "eqTM" },
    { id: "eqTM-L", title: "Lebap", parent: "eqTM" },
    { id: "eqTM-M", title: "Mary", parent: "eqTM" },
    {
        id: "eqTC",
        title: "Turks & Caicos Islands",
        parent: null
    },
    {
        id: "eqTC-TC",
        title: "Turks & Caicos Islands",
        parent: "eqTC"
    },
    { id: "eqTV", title: "Tuvalu", parent: null },
    { id: "eqTV-TV", title: "Tuvalu", parent: "eqTV" },
    { id: "eqUG", title: "Uganda", parent: null },
    { id: "eqUG-APA", title: "Apac", parent: "eqUG" },
    { id: "eqUG-ARU", title: "Arua", parent: "eqUG" },
    { id: "eqUG-BUN", title: "Bundibugyo", parent: "eqUG" },
    { id: "eqUG-BUS", title: "Bushenyi", parent: "eqUG" },
    { id: "eqUG-GUL", title: "Gulu", parent: "eqUG" },
    { id: "eqUG-HOI", title: "Hoima", parent: "eqUG" },
    { id: "eqUG-IGA", title: "Iganga", parent: "eqUG" },
    { id: "eqUG-JIN", title: "Jinja", parent: "eqUG" },
    { id: "eqUG-KBL", title: "Kabale", parent: "eqUG" },
    { id: "eqUG-KBR", title: "Kabarole", parent: "eqUG" },
    { id: "eqUG-KLG", title: "Kalangala", parent: "eqUG" },
    { id: "eqUG-KLA", title: "Kampala", parent: "eqUG" },
    { id: "eqUG-KLI", title: "Kamuli", parent: "eqUG" },
    { id: "eqUG-KAP", title: "Kapchorwa", parent: "eqUG" },
    { id: "eqUG-KAS", title: "Kasese", parent: "eqUG" },
    { id: "eqUG-KLE", title: "Kibaale", parent: "eqUG" },
    { id: "eqUG-KIB", title: "Kiboga", parent: "eqUG" },
    { id: "eqUG-KIS", title: "Kisoro", parent: "eqUG" },
    { id: "eqUG-KIT", title: "Kitgum", parent: "eqUG" },
    { id: "eqUG-KOT", title: "Kotido", parent: "eqUG" },
    { id: "eqUG-KUM", title: "Kumi", parent: "eqUG" },
    { id: "eqUG-LIR", title: "Lira", parent: "eqUG" },
    { id: "eqUG-LUW", title: "Luwero", parent: "eqUG" },
    { id: "eqUG-MSK", title: "Masaka", parent: "eqUG" },
    { id: "eqUG-MSI", title: "Masindi", parent: "eqUG" },
    { id: "eqUG-MBL", title: "Mbale", parent: "eqUG" },
    { id: "eqUG-MBR", title: "Mbarara", parent: "eqUG" },
    { id: "eqUG-MOR", title: "Moroto", parent: "eqUG" },
    { id: "eqUG-MOY", title: "Moyo", parent: "eqUG" },
    { id: "eqUG-MPI", title: "Mpigi", parent: "eqUG" },
    { id: "eqUG-MUB", title: "Mubende", parent: "eqUG" },
    { id: "eqUG-MUK", title: "Mukono", parent: "eqUG" },
    { id: "eqUG-NEB", title: "Nebbi", parent: "eqUG" },
    { id: "eqUG-NTU", title: "Ntungamo", parent: "eqUG" },
    { id: "eqUG-PAL", title: "Pallisa", parent: "eqUG" },
    { id: "eqUG-RAK", title: "Rakai", parent: "eqUG" },
    { id: "eqUG-RUK", title: "Rukungiri", parent: "eqUG" },
    { id: "eqUG-SOR", title: "Soroti", parent: "eqUG" },
    { id: "eqUG-TOR", title: "Tororo", parent: "eqUG" },
    { id: "eqUA", title: "Ukraine", parent: null },
    {
        id: "eqUA-71",
        title: "Cherkas'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-74",
        title: "Chernihivs'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-77",
        title: "Chernivets'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-12",
        title: "Dnipropetrovs'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-14",
        title: "Donets'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-26",
        title: "Ivano-Frankivs'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-63",
        title: "Kharkivs'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-65",
        title: "Khersons'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-68",
        title: "Khmel'nyts'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-35",
        title: "Kirovohrads'ka Oblast'",
        parent: "eqUA"
    },
    { id: "eqUA-32", title: "Kyïvs'ka Oblast'", parent: "eqUA" },
    {
        id: "eqUA-09",
        title: "Luhans'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-46",
        title: "L'vivs'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-48",
        title: "Mykolaïvs'ka Oblast'",
        parent: "eqUA"
    },
    { id: "eqUA-51", title: "Odes'ka Oblast'", parent: "eqUA" },
    {
        id: "eqUA-53",
        title: "Poltavs'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-56",
        title: "Rivnens'ka Oblast'",
        parent: "eqUA"
    },
    { id: "eqUA-59", title: "Sums'ka Oblast'", parent: "eqUA" },
    {
        id: "eqUA-61",
        title: "Ternopil's'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-05",
        title: "Vinnyts'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-07",
        title: "Volyns'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-21",
        title: "Zakarpats'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-23",
        title: "Zaporiz'ka Oblast'",
        parent: "eqUA"
    },
    {
        id: "eqUA-18",
        title: "Zhytomyrs'ka Oblast'",
        parent: "eqUA"
    },
    { id: "eqUA-43", title: "Respublika Krym", parent: "eqUA" },
    { id: "eqUA-30", title: "Kyïv", parent: "eqUA" },
    { id: "eqUA-40", title: "Sevastopol'", parent: "eqUA" },
    { id: "eqAE", title: "United Arab Emirates", parent: null },
    {
        id: "eqAE-AZ",
        title: "Abu Zaby (Abu Dhabi)",
        parent: "eqAE"
    },
    { id: "eqAE-AJ", title: "‘Ajman", parent: "eqAE" },
    { id: "eqAE-FU", title: "Al Fujayrah", parent: "eqAE" },
    {
        id: "eqAE-SH",
        title: "Ash Shariqah (Sharjah)",
        parent: "eqAE"
    },
    { id: "eqAE-DU", title: "Dubayy (Dubai)", parent: "eqAE" },
    { id: "eqAE-RK", title: "R'as al Khaymah", parent: "eqAE" },
    { id: "eqAE-UQ", title: "Umm al Qaywayn", parent: "eqAE" },
    { id: "eqGB", title: "United Kingdom", parent: null },
    { id: "eqGB-CHA", title: "Channel Islands", parent: "eqGB" },
    {
        id: "eqGB-GSY",
        title: "Guernsey [Guernesey]",
        parent: "eqGB-CHA"
    },
    { id: "eqGB-JSY", title: "Jersey", parent: "eqGB-CHA" },
    { id: "eqGB-ENG", title: "England", parent: "eqGB" },
    {
        id: "eqGB-BDG",
        title: "Barking and Dagenham",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-BNE", title: "Barnet", parent: "eqGB-ENG" },
    { id: "eqGB-BNS", title: "Barnsley", parent: "eqGB-ENG" },
    {
        id: "eqGB-BAS",
        title: "Bath and North East Somerset",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-BDF",
        title: "Bedfordshire",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-BEX", title: "Bexley", parent: "eqGB-ENG" },
    {
        id: "eqGB-BIR",
        title: "Birmingham (City of)",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-BBD",
        title: "Blackburn with Darwen",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-BPL", title: "Blackpool", parent: "eqGB-ENG" },
    { id: "eqGB-BOL", title: "Bolton", parent: "eqGB-ENG" },
    { id: "eqGB-BMH", title: "Bournemouth", parent: "eqGB-ENG" },
    {
        id: "eqGB-BRC",
        title: "Bracknell Forest",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-BRD",
        title: "Bradford (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-BEN", title: "Brent", parent: "eqGB-ENG" },
    {
        id: "eqGB-BNH",
        title: "Brighton and Hove",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-BST",
        title: "Bristol, City of",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-BRY", title: "Bromley", parent: "eqGB-ENG" },
    {
        id: "eqGB-BKM",
        title: "Buckinghamshire",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-BUR", title: "Bury", parent: "eqGB-ENG" },
    { id: "eqGB-CLD", title: "Calderdale", parent: "eqGB-ENG" },
    {
        id: "eqGB-CAM",
        title: "Cambridgeshire",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-CMD", title: "Camden", parent: "eqGB-ENG" },
    { id: "eqGB-CHS", title: "Cheshire", parent: "eqGB-ENG" },
    { id: "eqGB-CON", title: "Cornwall", parent: "eqGB-ENG" },
    {
        id: "eqGB-COV",
        title: "Coventry (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-CRY", title: "Croydon", parent: "eqGB-ENG" },
    { id: "eqGB-CMA", title: "Cumbria", parent: "eqGB-ENG" },
    { id: "eqGB-DAL", title: "Darlington", parent: "eqGB-ENG" },
    {
        id: "eqGB-DER",
        title: "Derby (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-DBY", title: "Derbyshire", parent: "eqGB-ENG" },
    { id: "eqGB-DEV", title: "Devon", parent: "eqGB-ENG" },
    { id: "eqGB-DNC", title: "Doncaster", parent: "eqGB-ENG" },
    { id: "eqGB-DOR", title: "Dorset", parent: "eqGB-ENG" },
    { id: "eqGB-DUD", title: "Dudley", parent: "eqGB-ENG" },
    { id: "eqGB-DUR", title: "Durham", parent: "eqGB-ENG" },
    { id: "eqGB-EAL", title: "Ealing", parent: "eqGB-ENG" },
    {
        id: "eqGB-ERY",
        title: "East Riding of Yorkshire",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-ESX", title: "East Sussex", parent: "eqGB-ENG" },
    { id: "eqGB-ENF", title: "Enfield", parent: "eqGB-ENG" },
    { id: "eqGB-ESS", title: "Essex", parent: "eqGB-ENG" },
    { id: "eqGB-GAT", title: "Gateshead", parent: "eqGB-ENG" },
    {
        id: "eqGB-GLS",
        title: "Gloucestershire",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-GRE", title: "Greenwich", parent: "eqGB-ENG" },
    { id: "eqGB-HCK", title: "Hackney", parent: "eqGB-ENG" },
    { id: "eqGB-HAL", title: "Haiton", parent: "eqGB-ENG" },
    {
        id: "eqGB-HMF",
        title: "Hammersmith and Fulham",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-HAM", title: "Hampshire", parent: "eqGB-ENG" },
    { id: "eqGB-HRY", title: "Haringey", parent: "eqGB-ENG" },
    { id: "eqGB-HRW", title: "Harrow", parent: "eqGB-ENG" },
    { id: "eqGB-HPL", title: "Hartlepool", parent: "eqGB-ENG" },
    { id: "eqGB-HAV", title: "Havering", parent: "eqGB-ENG" },
    {
        id: "eqGB-HEF",
        title: "Herefordshire, County of",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-HRT",
        title: "Hertfordshire",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-HIL", title: "Hillingdon", parent: "eqGB-ENG" },
    { id: "eqGB-HNS", title: "Hounslow", parent: "eqGB-ENG" },
    {
        id: "eqGB-IOW",
        title: "Isle of Wight",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-IOS",
        title: "Isles of Scilly",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-ISL", title: "Islington", parent: "eqGB-ENG" },
    {
        id: "eqGB-KEC",
        title: "Kensington and Chelsea",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-KEN", title: "Kent", parent: "eqGB-ENG" },
    {
        id: "eqGB-KHL",
        title: "Kingston upon Hull, City of",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-KTT",
        title: "Kingston upon Thames",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-KIR", title: "Kirklees", parent: "eqGB-ENG" },
    { id: "eqGB-KWL", title: "Knowsley", parent: "eqGB-ENG" },
    { id: "eqGB-LBH", title: "Lambeth", parent: "eqGB-ENG" },
    { id: "eqGB-LAN", title: "Lancashire", parent: "eqGB-ENG" },
    {
        id: "eqGB-LDS",
        title: "Leeds (City of)",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-LCE",
        title: "Leitester (City of)",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-LEC",
        title: "Leicestershire",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-LEW", title: "Lewisham", parent: "eqGB-ENG" },
    {
        id: "eqGB-LIN",
        title: "Lincolnshire",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-LIV",
        title: "Liverpool (City of)",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-LND",
        title: "London, City of",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-LUT", title: "Luton", parent: "eqGB-ENG" },
    {
        id: "eqGB-MAN",
        title: "Manchester (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-MDW", title: "Medway", parent: "eqGB-ENG" },
    { id: "eqGB-MRT", title: "Merton", parent: "eqGB-ENG" },
    {
        id: "eqGB-MDB",
        title: "Middlesbrough",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-MIK",
        title: "Milton Keynes",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-NET",
        title: "Newcastle upon Tyne (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-NWM", title: "Newham", parent: "eqGB-ENG" },
    { id: "eqGB-NFK", title: "Norfolk", parent: "eqGB-ENG" },
    {
        id: "eqGB-NEL",
        title: "North East Lincolnshire",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-NLN",
        title: "North Lincolnshire",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-NSM",
        title: "North Somerset",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-NTY",
        title: "North Tyneside",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-NYK",
        title: "North Yorkshire",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-NTH",
        title: "Northamptonshire",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-NBL",
        title: "Northumberland",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-NGM",
        title: "Nottingham (City of)",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-NTT",
        title: "Nottinghamshire",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-OLD", title: "Oldham", parent: "eqGB-ENG" },
    { id: "eqGB-OXF", title: "Oxfordshire", parent: "eqGB-ENG" },
    {
        id: "eqGB-PTE",
        title: "Peterborough",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-PLY",
        title: "Plymouth (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-POL", title: "Poole", parent: "eqGB-ENG" },
    {
        id: "eqGB-POR",
        title: "Portsmouth (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-RDG", title: "Reading", parent: "eqGB-ENG" },
    { id: "eqGB-RDB", title: "Redbridge", parent: "eqGB-ENG" },
    {
        id: "eqGB-RCC",
        title: "Redcar and Cleveland",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-RIC",
        title: "Richmond upon Thames",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-RCH", title: "Rochdale", parent: "eqGB-ENG" },
    { id: "eqGB-ROT", title: "Rotherham", parent: "eqGB-ENG" },
    { id: "eqGB-RUT", title: "Rutland", parent: "eqGB-ENG" },
    { id: "eqGB-SHN", title: "St. Helens", parent: "eqGB-ENG" },
    {
        id: "eqGB-SLF",
        title: "Salford (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-SAW", title: "Sandwell", parent: "eqGB-ENG" },
    { id: "eqGB-SFT", title: "Sefton", parent: "eqGB-ENG" },
    {
        id: "eqGB-SHF",
        title: "Sheffield (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-SHR", title: "Shropshire", parent: "eqGB-ENG" },
    { id: "eqGB-SLG", title: "Slough", parent: "eqGB-ENG" },
    { id: "eqGB-SOL", title: "Solihull", parent: "eqGB-ENG" },
    { id: "eqGB-SOM", title: "Somerset", parent: "eqGB-ENG" },
    {
        id: "eqGB-SGC",
        title: "South Gloucestershire",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-STY",
        title: "South Tyneside",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-STH",
        title: "Southampton (City of)",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-SOS",
        title: "Southend-on-Sea",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-SWK", title: "Southwark", parent: "eqGB-ENG" },
    {
        id: "eqGB-STS",
        title: "Staffordshire",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-SKP", title: "Stockport", parent: "eqGB-ENG" },
    {
        id: "eqGB-STT",
        title: "Stockton-On-Tees",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-STE",
        title: "Stoke-on-Trent (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-SFK", title: "Suffolk", parent: "eqGB-ENG" },
    {
        id: "eqGB-SND",
        title: "Sunderland (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-SRY", title: "Surrey", parent: "eqGB-ENG" },
    { id: "eqGB-STN", title: "Sutton", parent: "eqGB-ENG" },
    { id: "eqGB-SWD", title: "Swindon", parent: "eqGB-ENG" },
    { id: "eqGB-TAM", title: "Tameside", parent: "eqGB-ENG" },
    {
        id: "eqGB-TFW",
        title: "Telford and Wrekin",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-THR", title: "Thurrock", parent: "eqGB-ENG" },
    { id: "eqGB-TOB", title: "Torbay", parent: "eqGB-ENG" },
    {
        id: "eqGB-TWH",
        title: "Tower Hamlets",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-TRF", title: "Trafford", parent: "eqGB-ENG" },
    {
        id: "eqGB-WKF",
        title: "Wakefield (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-WLL", title: "Walsall", parent: "eqGB-ENG" },
    {
        id: "eqGB-WFT",
        title: "Waltham Forest",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-WND", title: "Wandsworth", parent: "eqGB-ENG" },
    { id: "eqGB-WRT", title: "Warrington", parent: "eqGB-ENG" },
    {
        id: "eqGB-WAR",
        title: "Warwickshire",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-WBK",
        title: "West Berkshire",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-WSX", title: "West Sussex", parent: "eqGB-ENG" },
    {
        id: "eqGB-WSM",
        title: "Westminster (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-WGN", title: "Wigan", parent: "eqGB-ENG" },
    { id: "eqGB-WIL", title: "Wiltshire", parent: "eqGB-ENG" },
    {
        id: "eqGB-WNM",
        title: "Windsor and Maidenhead",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-WRL", title: "Wirral", parent: "eqGB-ENG" },
    { id: "eqGB-WOK", title: "Wokingham", parent: "eqGB-ENG" },
    {
        id: "eqGB-WLV",
        title: "Wolverhampton",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-WOR",
        title: "Worcestershire",
        parent: "eqGB-ENG"
    },
    {
        id: "eqGB-YOR",
        title: "York (City of)",
        parent: "eqGB-ENG"
    },
    { id: "eqGB-IOM", title: "Isle of Man", parent: "eqGB" },
    {
        id: "eqGB-NIR",
        title: "Northern Ireland",
        parent: "eqGB"
    },
    { id: "eqGB-ANT", title: "Antrim", parent: "eqGB-NIR" },
    { id: "eqGB-ARD", title: "Ards", parent: "eqGB-NIR" },
    { id: "eqGB-ARM", title: "Armagh", parent: "eqGB-NIR" },
    { id: "eqGB-BLA", title: "Ballymena", parent: "eqGB-NIR" },
    { id: "eqGB-BLY", title: "Ballymoney", parent: "eqGB-NIR" },
    { id: "eqGB-BNB", title: "Banbridge", parent: "eqGB-NIR" },
    {
        id: "eqGB-BFS",
        title: "Belfast (City of)",
        parent: "eqGB-NIR"
    },
    {
        id: "eqGB-CKF",
        title: "Carrickfergus",
        parent: "eqGB-NIR"
    },
    { id: "eqGB-CSR", title: "Castlereagh", parent: "eqGB-NIR" },
    { id: "eqGB-CLR", title: "Coleraine", parent: "eqGB-NIR" },
    { id: "eqGB-CKT", title: "Cookstown", parent: "eqGB-NIR" },
    { id: "eqGB-CGV", title: "Craigavon", parent: "eqGB-NIR" },
    {
        id: "eqGB-DRY",
        title: "Derry (City of)",
        parent: "eqGB-NIR"
    },
    { id: "eqGB-DOW", title: "Down", parent: "eqGB-NIR" },
    { id: "eqGB-DGN", title: "Dungannon", parent: "eqGB-NIR" },
    { id: "eqGB-FER", title: "Fermanagh", parent: "eqGB-NIR" },
    { id: "eqGB-LRN", title: "Larne", parent: "eqGB-NIR" },
    { id: "eqGB-LMV", title: "Limavady", parent: "eqGB-NIR" },
    { id: "eqGB-LSB", title: "Lisburn", parent: "eqGB-NIR" },
    { id: "eqGB-MFT", title: "Magherafelt", parent: "eqGB-NIR" },
    { id: "eqGB-MYL", title: "Moyle", parent: "eqGB-NIR" },
    {
        id: "eqGB-NYM",
        title: "Newry and Mourne",
        parent: "eqGB-NIR"
    },
    {
        id: "eqGB-NTA",
        title: "Newtownabbey",
        parent: "eqGB-NIR"
    },
    { id: "eqGB-NDN", title: "North Down", parent: "eqGB-NIR" },
    { id: "eqGB-OMH", title: "Omagh", parent: "eqGB-NIR" },
    { id: "eqGB-STB", title: "Strabane", parent: "eqGB-NIR" },
    { id: "eqGB-SCT", title: "Scotland", parent: "eqGB" },
    {
        id: "eqGB-ABE",
        title: "Aberdeen City",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-ABD",
        title: "Aberdeenshire",
        parent: "eqGB-SCT"
    },
    { id: "eqGB-ANS", title: "Angus", parent: "eqGB-SCT" },
    {
        id: "eqGB-AGB",
        title: "Argyll and Bute",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-CLK",
        title: "Clackmannanshire",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-DGY",
        title: "Dumfries and Galloway",
        parent: "eqGB-SCT"
    },
    { id: "eqGB-DND", title: "Dundee City", parent: "eqGB-SCT" },
    {
        id: "eqGB-EAY",
        title: "East Ayrshire",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-EDU",
        title: "East Dunbartonshire",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-ELN",
        title: "East Lothian",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-ERW",
        title: "East Renfrewshire",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-EDH",
        title: "Edinburgh, City of",
        parent: "eqGB-SCT"
    },
    { id: "eqGB-ELS", title: "Eilean Siar", parent: "eqGB-SCT" },
    { id: "eqGB-FAL", title: "Falkirk", parent: "eqGB-SCT" },
    { id: "eqGB-FIF", title: "Fife", parent: "eqGB-SCT" },
    {
        id: "eqGB-GLG",
        title: "Glasgow City",
        parent: "eqGB-SCT"
    },
    { id: "eqGB-HLD", title: "Highland", parent: "eqGB-SCT" },
    { id: "eqGB-IVC", title: "Inverclyde", parent: "eqGB-SCT" },
    { id: "eqGB-MLN", title: "Midlothian", parent: "eqGB-SCT" },
    { id: "eqGB-MRY", title: "Moray", parent: "eqGB-SCT" },
    {
        id: "eqGB-NAY",
        title: "North Ayrshire",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-NLK",
        title: "North Lanarkshire",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-ORK",
        title: "Orkney Islands",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-PKN",
        title: "Perth and Kinross",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-RFW",
        title: "Renfrewshire",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-SCB",
        title: "Scottish Borders, The",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-ZET",
        title: "Shetland Islands",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-SAY",
        title: "South Ayrshire",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-SLK",
        title: "South Lanarkshire",
        parent: "eqGB-SCT"
    },
    { id: "eqGB-STG", title: "Stirling", parent: "eqGB-SCT" },
    {
        id: "eqGB-WDU",
        title: "West Dunbartonshire",
        parent: "eqGB-SCT"
    },
    {
        id: "eqGB-WLN",
        title: "West Lothian",
        parent: "eqGB-SCT"
    },
    { id: "eqGB-WLS", title: "Wales [Cymru]", parent: "eqGB" },
    {
        id: "eqGB-BGW",
        title: "Blaenau Gwent",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-BGE",
        title: "Bridgend [Pen-y-bont ar Ogwr GB-POG]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-CAY",
        title: "Caerphilly [Caerffili GB-CAF]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-CRF",
        title: "Cardiff (City of) [Caerdydd GB-CRD]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-CMN",
        title: "Carmarthenshire [Sir Gaerfyrddin GB-GFY]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-CGN",
        title: "Ceredigion [Sir Ceredigion]",
        parent: "eqGB-WLS"
    },
    { id: "eqGB-CWY", title: "Conwy", parent: "eqGB-WLS" },
    {
        id: "eqGB-DEN",
        title: "Denbighshire [Sir Ddinbych GB-DDB]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-FLN",
        title: "Flintshire [Sir y Fflint GB-FFL]",
        parent: "eqGB-WLS"
    },
    { id: "eqGB-GWN", title: "Gwynedd", parent: "eqGB-WLS" },
    {
        id: "eqGB-AGY",
        title: "Isle of Anglesey [Sir Ynys Man GB-YNM]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-MTY",
        title: "Merthyr Tydfil [Merthyr Tudful GB-MTU]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-MON",
        title: "Monmouthshire [Sir Fynwy GB-FYN]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-NTL",
        title: "Neath Port Talbot [Castell-nedd Port Talbot GB-CTL]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-NWP",
        title: "Newport [Casnewydd GB-CNW]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-PEM",
        title: "Pembrokeshire [Sir Benfro CB-BNF]",
        parent: "eqGB-WLS"
    },
    { id: "eqGB-POW", title: "Powys", parent: "eqGB-WLS" },
    {
        id: "eqGB-RCT",
        title: "Rhondda, Cynon, Taff [Rhondda, Cynon, Taf]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-SWA",
        title: "Swansea (City of) [Abertawe GB-ATA]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-TOF",
        title: "Torfaen [Tor-faen]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-VGL",
        title: "Vale of Glamorgan, The [Bro Morgannwg GB-BMG]",
        parent: "eqGB-WLS"
    },
    {
        id: "eqGB-WRX",
        title: "Wrexham [Wrecsam GB-WRC]",
        parent: "eqGB-WLS"
    },
    { id: "eqUS", title: "United States", parent: null },
    { id: "eqUS-AL", title: "Alabama", parent: "eqUS" },
    { id: "eqUS-AK", title: "Alaska", parent: "eqUS" },
    { id: "eqUS-AZ", title: "Arizona", parent: "eqUS" },
    { id: "eqUS-AR", title: "Arkansas", parent: "eqUS" },
    { id: "eqUS-CA", title: "California", parent: "eqUS" },
    { id: "eqUS-CO", title: "Colorado", parent: "eqUS" },
    { id: "eqUS-CT", title: "Connecticut", parent: "eqUS" },
    { id: "eqUS-DE", title: "Delaware", parent: "eqUS" },
    { id: "eqUS-FL", title: "Florida", parent: "eqUS" },
    { id: "eqUS-GA", title: "Georgia", parent: "eqUS" },
    { id: "eqUS-HI", title: "Hawaii", parent: "eqUS" },
    { id: "eqUS-ID", title: "Idaho", parent: "eqUS" },
    { id: "eqUS-IL", title: "Illinois", parent: "eqUS" },
    { id: "eqUS-IN", title: "Indiana", parent: "eqUS" },
    { id: "eqUS-IA", title: "Iowa", parent: "eqUS" },
    { id: "eqUS-KS", title: "Kansas", parent: "eqUS" },
    { id: "eqUS-KY", title: "Kentucky", parent: "eqUS" },
    { id: "eqUS-LA", title: "Louisiana", parent: "eqUS" },
    { id: "eqUS-ME", title: "Maine", parent: "eqUS" },
    { id: "eqUS-MD", title: "Maryland", parent: "eqUS" },
    { id: "eqUS-MA", title: "Massachusetts", parent: "eqUS" },
    { id: "eqUS-MI", title: "Michigan", parent: "eqUS" },
    { id: "eqUS-MN", title: "Minnesota", parent: "eqUS" },
    { id: "eqUS-MS", title: "Mississippi", parent: "eqUS" },
    { id: "eqUS-MO", title: "Missouri", parent: "eqUS" },
    { id: "eqUS-MT", title: "Montana", parent: "eqUS" },
    { id: "eqUS-NE", title: "Nebraska", parent: "eqUS" },
    { id: "eqUS-NV", title: "Nevada", parent: "eqUS" },
    { id: "eqUS-NH", title: "New Hampshire", parent: "eqUS" },
    { id: "eqUS-NJ", title: "New Jersey", parent: "eqUS" },
    { id: "eqUS-NM", title: "New Mexico", parent: "eqUS" },
    { id: "eqUS-NY", title: "New York", parent: "eqUS" },
    { id: "eqUS-NC", title: "North Carolina", parent: "eqUS" },
    { id: "eqUS-ND", title: "North Dakota", parent: "eqUS" },
    { id: "eqUS-OH", title: "Ohio", parent: "eqUS" },
    { id: "eqUS-OK", title: "Oklahoma", parent: "eqUS" },
    { id: "eqUS-OR", title: "Oregon", parent: "eqUS" },
    { id: "eqUS-PA", title: "Pennsylvania", parent: "eqUS" },
    { id: "eqUS-RI", title: "Rhode Island", parent: "eqUS" },
    { id: "eqUS-SC", title: "South Carolina", parent: "eqUS" },
    { id: "eqUS-SD", title: "South Dakota", parent: "eqUS" },
    { id: "eqUS-TN", title: "Tennessee", parent: "eqUS" },
    { id: "eqUS-TX", title: "Texas", parent: "eqUS" },
    { id: "eqUS-UT", title: "Utah", parent: "eqUS" },
    { id: "eqUS-VT", title: "Vermont", parent: "eqUS" },
    { id: "eqUS-VA", title: "Virginia", parent: "eqUS" },
    { id: "eqUS-WA", title: "Washington", parent: "eqUS" },
    { id: "eqUS-WV", title: "West Virginia", parent: "eqUS" },
    { id: "eqUS-WI", title: "Wisconsin", parent: "eqUS" },
    { id: "eqUS-WY", title: "Wyoming", parent: "eqUS" },
    {
        id: "eqUS-DC",
        title: "District of Columbia",
        parent: "eqUS"
    },
    { id: "eqUS-AS", title: "American Samoa", parent: "eqUS" },
    { id: "eqUS-GU", title: "Guam", parent: "eqUS" },
    {
        id: "eqUS-MP",
        title: "Northern Mariana Islands",
        parent: "eqUS"
    },
    { id: "eqUS-PR", title: "Puerto Rico", parent: "eqUS" },
    {
        id: "eqUS-UM",
        title: "United States Minor Outlying Islands",
        parent: "eqUS"
    },
    {
        id: "eqUS-VI",
        title: "Virgin Islands, U.S.",
        parent: "eqUS"
    },
    { id: "eqUY", title: "Uruguay", parent: null },
    { id: "eqUY-AR", title: "Artigas", parent: "eqUY" },
    { id: "eqUY-CA", title: "Canelones", parent: "eqUY" },
    { id: "eqUY-CL", title: "Cerro Largo", parent: "eqUY" },
    { id: "eqUY-CO", title: "Colonia", parent: "eqUY" },
    { id: "eqUY-DU", title: "Durazno", parent: "eqUY" },
    { id: "eqUY-FS", title: "Flores", parent: "eqUY" },
    { id: "eqUY-FD", title: "Florida", parent: "eqUY" },
    { id: "eqUY-LA", title: "Lavalleja", parent: "eqUY" },
    { id: "eqUY-MA", title: "Maldonado", parent: "eqUY" },
    { id: "eqUY-MO", title: "Montevideo", parent: "eqUY" },
    { id: "eqUY-PA", title: "Paysandú", parent: "eqUY" },
    { id: "eqUY-RN", title: "Río Negro", parent: "eqUY" },
    { id: "eqUY-RV", title: "Rivera", parent: "eqUY" },
    { id: "eqUY-RO", title: "Rocha", parent: "eqUY" },
    { id: "eqUY-SA", title: "Salto", parent: "eqUY" },
    { id: "eqUY-SJ", title: "San José", parent: "eqUY" },
    { id: "eqUY-SO", title: "Soriano", parent: "eqUY" },
    { id: "eqUY-TA", title: "Tacuarembó", parent: "eqUY" },
    { id: "eqUY-TT", title: "Treinta y Tres", parent: "eqUY" },
    { id: "eqUZ", title: "Uzbekistan", parent: null },
    {
        id: "eqUZ-QR",
        title: "Qoraqalpoghiston Respublikasi (Karakalpakstan, Respublika)",
        parent: "eqUZ"
    },
    {
        id: "eqUZ-AN",
        title: "Andijon (Andizhan)",
        parent: "eqUZ"
    },
    {
        id: "eqUZ-BU",
        title: "Bukhoro (Bukhara)",
        parent: "eqUZ"
    },
    {
        id: "eqUZ-FA",
        title: "Farghona (Fergana)",
        parent: "eqUZ"
    },
    {
        id: "eqUZ-JI",
        title: "Jizzakh (Dzhizak)",
        parent: "eqUZ"
    },
    {
        id: "eqUZ-KH",
        title: "Khorazm (Khorezm)",
        parent: "eqUZ"
    },
    { id: "eqUZ-NG", title: "Namangan", parent: "eqUZ" },
    { id: "eqUZ-NW", title: "Nawoiy (Navoi)", parent: "eqUZ" },
    {
        id: "eqUZ-QA",
        title: "Qashqadaryo (Kashkadar'ya)",
        parent: "eqUZ"
    },
    {
        id: "eqUZ-SA",
        title: "Samarqand (Samarkand)",
        parent: "eqUZ"
    },
    {
        id: "eqUZ-SI",
        title: "Sirdaryo (Syrdar'ya)",
        parent: "eqUZ"
    },
    {
        id: "eqUZ-SU",
        title: "Surkhondaryo (Surkhandar'ya)",
        parent: "eqUZ"
    },
    {
        id: "eqUZ-TO",
        title: "Toshkent (Tashkent)",
        parent: "eqUZ"
    },
    { id: "eqVU", title: "Vanuatu", parent: null },
    { id: "eqVU-MAP", title: "Malampa", parent: "eqVU" },
    { id: "eqVU-PAM", title: "Pénama", parent: "eqVU" },
    { id: "eqVU-SAM", title: "Sanma", parent: "eqVU" },
    { id: "eqVU-SEE", title: "Shéfa", parent: "eqVU" },
    { id: "eqVU-TAE", title: "Taféa", parent: "eqVU" },
    { id: "eqVU-TOB", title: "Torba", parent: "eqVU" },
    {
        id: "eqVA",
        title: "Vatican City (Holy See)",
        parent: null
    },
    {
        id: "eqVA-VA",
        title: "Vatican City (Holy See)",
        parent: "eqVA"
    },
    { id: "eqVE", title: "Venezuela", parent: null },
    { id: "eqVE-A", title: "Distrito Federal", parent: "eqVE" },
    { id: "eqVE-B", title: "Anzoátegui", parent: "eqVE" },
    { id: "eqVE-C", title: "Apure", parent: "eqVE" },
    { id: "eqVE-D", title: "Aragua", parent: "eqVE" },
    { id: "eqVE-E", title: "Barinas", parent: "eqVE" },
    { id: "eqVE-F", title: "Bolívar", parent: "eqVE" },
    { id: "eqVE-G", title: "Carabobo", parent: "eqVE" },
    { id: "eqVE-H", title: "Cojedes", parent: "eqVE" },
    { id: "eqVE-I", title: "Falcón", parent: "eqVE" },
    { id: "eqVE-J", title: "Guárico", parent: "eqVE" },
    { id: "eqVE-K", title: "Lara", parent: "eqVE" },
    { id: "eqVE-L", title: "Mérida", parent: "eqVE" },
    { id: "eqVE-M", title: "Miranda", parent: "eqVE" },
    { id: "eqVE-N", title: "Monagas", parent: "eqVE" },
    { id: "eqVE-O", title: "Nueva Esparta", parent: "eqVE" },
    { id: "eqVE-P", title: "Portuguesa", parent: "eqVE" },
    { id: "eqVE-R", title: "Sucre", parent: "eqVE" },
    { id: "eqVE-S", title: "Táchira", parent: "eqVE" },
    { id: "eqVE-T", title: "Trujillo", parent: "eqVE" },
    { id: "eqVE-U", title: "Yaracuy", parent: "eqVE" },
    { id: "eqVE-V", title: "Zulia", parent: "eqVE" },
    { id: "eqVE-Z", title: "Amazonas", parent: "eqVE" },
    { id: "eqVE-Y", title: "Delta Amacuro", parent: "eqVE" },
    {
        id: "eqVE-W",
        title: "Dependencias Federales",
        parent: "eqVE"
    },
    { id: "eqVN", title: "Viet Nam", parent: null },
    { id: "eqVN-44", title: "An Giang", parent: "eqVN" },
    { id: "eqVN-53", title: "Bat Can", parent: "eqVN" },
    { id: "eqVN-54", title: "Bat Giang", parent: "eqVN" },
    { id: "eqVN-55", title: "Bat Lieu", parent: "eqVN" },
    { id: "eqVN-56", title: "Bat Ninh", parent: "eqVN" },
    {
        id: "eqVN-43",
        title: "Ba Ria - Vung Tau",
        parent: "eqVN"
    },
    { id: "eqVN-50", title: "Ben Tre", parent: "eqVN" },
    { id: "eqVN-31", title: "Binh Dinh", parent: "eqVN" },
    { id: "eqVN-57", title: "Binh Duong", parent: "eqVN" },
    { id: "eqVN-58", title: "Binh Phuoc", parent: "eqVN" },
    { id: "eqVN-40", title: "Binh Thuan", parent: "eqVN" },
    { id: "eqVN-59", title: "Ca Mau", parent: "eqVN" },
    { id: "eqVN-48", title: "Can Tho", parent: "eqVN" },
    { id: "eqVN-04", title: "Cao Bang", parent: "eqVN" },
    { id: "eqVN-33", title: "Dac Lac", parent: "eqVN" },
    {
        id: "eqVN-60",
        title: "Da Nang, thanh pho",
        parent: "eqVN"
    },
    { id: "eqVN-39", title: "Dong Nai", parent: "eqVN" },
    { id: "eqVN-45", title: "Dong Thap", parent: "eqVN" },
    { id: "eqVN-30", title: "Gia Lai", parent: "eqVN" },
    { id: "eqVN-03", title: "Ha Giang", parent: "eqVN" },
    { id: "eqVN-61", title: "Hai Duong", parent: "eqVN" },
    {
        id: "eqVN-62",
        title: "Hai Phong, thanh pho",
        parent: "eqVN"
    },
    { id: "eqVN-63", title: "Ha Nam", parent: "eqVN" },
    { id: "eqVN-64", title: "Ha Noi, thu do", parent: "eqVN" },
    { id: "eqVN-15", title: "Ha Tay", parent: "eqVN" },
    { id: "eqVN-23", title: "Ha Tinh", parent: "eqVN" },
    { id: "eqVN-14", title: "Hoa Binh", parent: "eqVN" },
    {
        id: "eqVN-65",
        title: "Ho Chi Minh, thanh po [Sai Gon]",
        parent: "eqVN"
    },
    { id: "eqVN-66", title: "Hung Yen", parent: "eqVN" },
    { id: "eqVN-34", title: "Khanh Hoa", parent: "eqVN" },
    { id: "eqVN-47", title: "Kien Giang", parent: "eqVN" },
    { id: "eqVN-28", title: "Kon Turn", parent: "eqVN" },
    { id: "eqVN-01", title: "Lai Chau", parent: "eqVN" },
    { id: "eqVN-35", title: "Lam Dong", parent: "eqVN" },
    { id: "eqVN-09", title: "Lang Son", parent: "eqVN" },
    { id: "eqVN-02", title: "Lao Cai", parent: "eqVN" },
    { id: "eqVN-41", title: "Long An", parent: "eqVN" },
    { id: "eqVN-67", title: "Nam Dinh", parent: "eqVN" },
    { id: "eqVN-22", title: "Nghe An", parent: "eqVN" },
    { id: "eqVN-18", title: "Ninh Binh", parent: "eqVN" },
    { id: "eqVN-36", title: "Ninh Thuan", parent: "eqVN" },
    { id: "eqVN-68", title: "Phu Tho", parent: "eqVN" },
    { id: "eqVN-32", title: "Phu Yen", parent: "eqVN" },
    { id: "eqVN-24", title: "Quang Ninh", parent: "eqVN" },
    { id: "eqVN-27", title: "Quang Nam", parent: "eqVN" },
    { id: "eqVN-29", title: "Quang Ngai", parent: "eqVN" },
    { id: "eqVN-25", title: "Quang Tri", parent: "eqVN" },
    { id: "eqVN-52", title: "Sec Trang", parent: "eqVN" },
    { id: "eqVN-05", title: "Son La", parent: "eqVN" },
    { id: "eqVN-37", title: "Tay Ninh", parent: "eqVN" },
    { id: "eqVN-20", title: "Thai Binh", parent: "eqVN" },
    { id: "eqVN-69", title: "Thai Nguyen", parent: "eqVN" },
    { id: "eqVN-21", title: "Thanh Hoa", parent: "eqVN" },
    { id: "eqVN-26", title: "Thua Thien-Hue", parent: "eqVN" },
    { id: "eqVN-46", title: "Tien Giang", parent: "eqVN" },
    { id: "eqVN-51", title: "Tra Vinh", parent: "eqVN" },
    { id: "eqVN-07", title: "Tuyen Quang", parent: "eqVN" },
    { id: "eqVN-49", title: "Vinh Long", parent: "eqVN" },
    { id: "eqVN-70", title: "Vinh Yen", parent: "eqVN" },
    { id: "eqVN-06", title: "Yen Bai", parent: "eqVN" },
    {
        id: "eqVG",
        title: "Virgin Islands (British)",
        parent: null
    },
    {
        id: "eqVG-VG",
        title: "Virgin Islands (British)",
        parent: "eqVG"
    },
    { id: "eqVI", title: "Virgin Islands (U.S.)", parent: null },
    {
        id: "eqVI-VI",
        title: "Virgin Islands (U.S.)",
        parent: "eqVI"
    },
    {
        id: "eqWF",
        title: "Wallis & Futuna Islands",
        parent: null
    },
    {
        id: "eqWF-WF",
        title: "Wallis & Futuna Islands",
        parent: "eqWF"
    },
    { id: "eqEH", title: "Western Sahara", parent: null },
    { id: "eqEH-EH", title: "Western Sahara", parent: "eqEH" },
    { id: "eqYE", title: "Yemen", parent: null },
    { id: "eqYE-AB", title: "Abyan", parent: "eqYE" },
    { id: "eqYE-AD", title: "‘Adan", parent: "eqYE" },
    { id: "eqYE-BA", title: "Al Bay?a'", parent: "eqYE" },
    { id: "eqYE-HU", title: "Al ?udaydah", parent: "eqYE" },
    { id: "eqYE-JA", title: "Al Jawf", parent: "eqYE" },
    { id: "eqYE-MR", title: "Al Mahrah", parent: "eqYE" },
    { id: "eqYE-MW", title: "Al Ma?wit", parent: "eqYE" },
    { id: "eqYE-DH", title: "Dhamar", parent: "eqYE" },
    { id: "eqYE-HD", title: "?a?ramawt", parent: "eqYE" },
    { id: "eqYE-HJ", title: "?ajjah", parent: "eqYE" },
    { id: "eqYE-IB", title: "Ibb", parent: "eqYE" },
    { id: "eqYE-LA", title: "La?ij", parent: "eqYE" },
    { id: "eqYE-MA", title: "Ma'rib", parent: "eqYE" },
    { id: "eqYE-SD", title: "Sa'dah", parent: "eqYE" },
    { id: "eqYE-SN", title: "San‘a'", parent: "eqYE" },
    { id: "eqYE-SH", title: "Shabwah", parent: "eqYE" },
    { id: "eqYE-TA", title: "Ta‘izz", parent: "eqYE" },
    { id: "eqYU", title: "Yugoslavia", parent: null },
    { id: "eqYU-CG", title: "Crna Gora", parent: "eqYU" },
    { id: "eqYU-SR", title: "Srbija", parent: "eqYU" },
    { id: "eqYU-KM", title: "Kosovo-Metohija", parent: "eqYU" },
    { id: "eqYU-VO", title: "Vojvodina", parent: "eqYU" },
    { id: "eqCD", title: "Zaire", parent: null },
    { id: "eqCD-KN", title: "Kinshasa", parent: "eqCD" },
    { id: "eqCD-BN", title: "Bandundu", parent: "eqCD" },
    { id: "eqCD-BC", title: "Bas-Congo", parent: "eqCD" },
    { id: "eqCD-EQ", title: "Équateur", parent: "eqCD" },
    { id: "eqCD-HC", title: "Haut-Congo", parent: "eqCD" },
    { id: "eqCD-KW", title: "Kasai-Occidental", parent: "eqCD" },
    { id: "eqCD-KE", title: "Kasai-Oriental", parent: "eqCD" },
    { id: "eqCD-KA", title: "Katanga", parent: "eqCD" },
    { id: "eqCD-MA", title: "Maniema", parent: "eqCD" },
    { id: "eqCD-NK", title: "Nord-Kivu", parent: "eqCD" },
    { id: "eqCD-SK", title: "Sud-Kivu", parent: "eqCD" },
    { id: "eqZM", title: "Zambia", parent: null },
    { id: "eqZM-02", title: "Central", parent: "eqZM" },
    { id: "eqZM-08", title: "Copperbelt", parent: "eqZM" },
    { id: "eqZM-03", title: "Eastern", parent: "eqZM" },
    { id: "eqZM-04", title: "Luapula", parent: "eqZM" },
    { id: "eqZM-09", title: "Lusaka", parent: "eqZM" },
    { id: "eqZM-05", title: "Northern", parent: "eqZM" },
    { id: "eqZM-06", title: "North-Western", parent: "eqZM" },
    { id: "eqZM-07", title: "Southern", parent: "eqZM" },
    { id: "eqZM-01", title: "Western", parent: "eqZM" },
    { id: "eqZW", title: "Zimbabwe", parent: null },
    { id: "eqZW-BU", title: "Bulawayo", parent: "eqZW" },
    { id: "eqZW-HA", title: "Harare", parent: "eqZW" },
    { id: "eqZW-MA", title: "Manicaland", parent: "eqZW" },
    {
        id: "eqZW-MC",
        title: "Mashonaland Central",
        parent: "eqZW"
    },
    { id: "eqZW-ME", title: "Mashonaland East", parent: "eqZW" },
    { id: "eqZW-MW", title: "Mashonaland West", parent: "eqZW" },
    { id: "eqZW-MV", title: "Masvingo", parent: "eqZW" },
    {
        id: "eqZW-MN",
        title: "Matabeleland North",
        parent: "eqZW"
    },
    {
        id: "eqZW-MS",
        title: "Matabeleland South",
        parent: "eqZW"
    },
    { id: "eqZW-MI", title: "Midlands", parent: "eqZW" }
];

export const countries = [
    { id: "eqDEFAULT", title: "(Default)", parent: null },
    { id: "eqAF", title: "Afghanistan   [AF]", parent: null },
    { id: "eqAL", title: "Albania   [AL]", parent: null },
    { id: "eqDZ", title: "Algeria   [DZ]", parent: null },
    { id: "eqAS", title: "American Samoa   [AS]", parent: null },
    { id: "eqAD", title: "Andorra   [AD]", parent: null },
    { id: "eqAO", title: "Angola   [AO]", parent: null },
    { id: "eqAI", title: "Anguilla   [AI]", parent: null },
    { id: "eqAQ", title: "Antarctica   [AQ]", parent: null },
    {
        id: "eqAG",
        title: "Antigua & Barbuda   [AG]",
        parent: null
    },
    { id: "eqAR", title: "Argentina   [AR]", parent: null },
    { id: "eqAM", title: "Armenia   [AM]", parent: null },
    { id: "eqAW", title: "Aruba   [AW]", parent: null },
    { id: "eqAU", title: "Australia   [AU]", parent: null },
    { id: "eqAT", title: "Austria   [AT]", parent: null },
    { id: "eqAZ", title: "Azerbaijan   [AZ]", parent: null },
    { id: "eqBS", title: "Bahamas   [BS]", parent: null },
    { id: "eqBH", title: "Bahrain   [BH]", parent: null },
    { id: "eqBD", title: "Bangladesh   [BD]", parent: null },
    { id: "eqBB", title: "Barbados   [BB]", parent: null },
    { id: "eqBY", title: "Belarus   [BY]", parent: null },
    { id: "eqBE", title: "Belgium   [BE]", parent: null },
    { id: "eqBZ", title: "Belize   [BZ]", parent: null },
    { id: "eqBJ", title: "Benin   [BJ]", parent: null },
    { id: "eqBM", title: "Bermuda   [BM]", parent: null },
    { id: "eqBT", title: "Bhutan   [BT]", parent: null },
    { id: "eqBO", title: "Bolivia   [BO]", parent: null },
    {
        id: "eqBA",
        title: "Bosnia & Herzegovina   [BA]",
        parent: null
    },
    { id: "eqBW", title: "Botswana   [BW]", parent: null },
    { id: "eqBV", title: "Bouvet Island   [BV]", parent: null },
    { id: "eqBR", title: "Brazil   [BR]", parent: null },
    {
        id: "eqIO",
        title: "British Indian Ocean Territory   [IO]",
        parent: null
    },
    {
        id: "eqBN",
        title: "Brunei Darussalam   [BN]",
        parent: null
    },
    { id: "eqBG", title: "Bulgaria   [BG]", parent: null },
    { id: "eqBF", title: "Burkina Faso   [BF]", parent: null },
    { id: "eqBI", title: "Burundi   [BI]", parent: null },
    { id: "eqKH", title: "Cambodia   [KH]", parent: null },
    { id: "eqCM", title: "Cameroon   [CM]", parent: null },
    { id: "eqCA", title: "Canada   [CA]", parent: null },
    { id: "eqCV", title: "Cape Verde   [CV]", parent: null },
    { id: "eqKY", title: "Cayman Islands   [KY]", parent: null },
    {
        id: "eqCF",
        title: "Central African Republic   [CF]",
        parent: null
    },
    { id: "eqTD", title: "Chad   [TD]", parent: null },
    { id: "eqCL", title: "Chile   [CL]", parent: null },
    { id: "eqCN", title: "China   [CN]", parent: null },
    {
        id: "eqCX",
        title: "Christmas Island   [CX]",
        parent: null
    },
    {
        id: "eqCC",
        title: "Cocos (Keeling) Islands   [CC]",
        parent: null
    },
    { id: "eqCO", title: "Colombia   [CO]", parent: null },
    { id: "eqKM", title: "Comoros   [KM]", parent: null },
    { id: "eqCG", title: "Congo   [CG]", parent: null },
    { id: "eqCK", title: "Cook Islands   [CK]", parent: null },
    { id: "eqCR", title: "Costa Rica   [CR]", parent: null },
    {
        id: "eqCI",
        title: "Cote D'ivoire (Ivory Coast)   [CI]",
        parent: null
    },
    {
        id: "eqHR",
        title: "Croatia (Hrvatska)   [HR]",
        parent: null
    },
    { id: "eqCU", title: "Cuba   [CU]", parent: null },
    { id: "eqCY", title: "Cyprus   [CY]", parent: null },
    { id: "eqCZ", title: "Czech Republic   [CZ]", parent: null },
    { id: "eqDK", title: "Denmark   [DK]", parent: null },
    { id: "eqDJ", title: "Djibouti   [DJ]", parent: null },
    { id: "eqDM", title: "Dominica   [DM]", parent: null },
    {
        id: "eqDO",
        title: "Dominican Republic   [DO]",
        parent: null
    },
    { id: "eqTP", title: "East Timor   [TP]", parent: null },
    { id: "eqEC", title: "Ecuador   [EC]", parent: null },
    { id: "eqEG", title: "Egypt   [EG]", parent: null },
    { id: "eqSV", title: "El Salvador   [SV]", parent: null },
    {
        id: "eqGQ",
        title: "Equatorial Guinea   [GQ]",
        parent: null
    },
    { id: "eqER", title: "Eritrea   [ER]", parent: null },
    { id: "eqEE", title: "Estonia   [EE]", parent: null },
    { id: "eqET", title: "Ethiopia   [ET]", parent: null },
    {
        id: "eqFK",
        title: "Falkland Islands (Malvinas)   [FK]",
        parent: null
    },
    { id: "eqFO", title: "Faroe Islands   [FO]", parent: null },
    { id: "eqFJ", title: "Fiji   [FJ]", parent: null },
    { id: "eqFI", title: "Finland   [FI]", parent: null },
    { id: "eqFR", title: "France   [FR]", parent: null },
    { id: "eqGF", title: "French Guiana   [GF]", parent: null },
    {
        id: "eqPF",
        title: "French Polynesia   [PF]",
        parent: null
    },
    {
        id: "eqTF",
        title: "French Southern Territories   [TF]",
        parent: null
    },
    { id: "eqGA", title: "Gabon   [GA]", parent: null },
    { id: "eqGM", title: "Gambia   [GM]", parent: null },
    { id: "eqGE", title: "Georgia   [GE]", parent: null },
    { id: "eqDE", title: "Germany   [DE]", parent: null },
    { id: "eqGH", title: "Ghana   [GH]", parent: null },
    { id: "eqGI", title: "Gibraltar   [GI]", parent: null },
    { id: "eqGR", title: "Greece   [GR]", parent: null },
    { id: "eqGL", title: "Greenland   [GL]", parent: null },
    { id: "eqGD", title: "Grenada   [GD]", parent: null },
    { id: "eqGP", title: "Guadeloupe   [GP]", parent: null },
    { id: "eqGU", title: "Guam   [GU]", parent: null },
    { id: "eqGT", title: "Guatemala   [GT]", parent: null },
    { id: "eqGN", title: "Guinea   [GN]", parent: null },
    { id: "eqGW", title: "Guinea-Bissau   [GW]", parent: null },
    { id: "eqGY", title: "Guyana   [GY]", parent: null },
    { id: "eqHT", title: "Haiti   [HT]", parent: null },
    {
        id: "eqHM",
        title: "Heard & McDonald Islands   [HM]",
        parent: null
    },
    { id: "eqHN", title: "Honduras   [HN]", parent: null },
    { id: "eqHK", title: "Hong Kong   [HK]", parent: null },
    { id: "eqHU", title: "Hungary   [HU]", parent: null },
    { id: "eqIS", title: "Iceland   [IS]", parent: null },
    { id: "eqIN", title: "India   [IN]", parent: null },
    { id: "eqID", title: "Indonesia   [ID]", parent: null },
    { id: "eqIR", title: "Iran   [IR]", parent: null },
    { id: "eqIQ", title: "Iraq   [IQ]", parent: null },
    { id: "eqIE", title: "Ireland   [IE]", parent: null },
    { id: "eqIL", title: "Israel   [IL]", parent: null },
    { id: "eqIT", title: "Italy   [IT]", parent: null },
    { id: "eqJM", title: "Jamaica   [JM]", parent: null },
    { id: "eqJP", title: "Japan   [JP]", parent: null },
    { id: "eqJO", title: "Jordan   [JO]", parent: null },
    { id: "eqKZ", title: "Kazakhstan   [KZ]", parent: null },
    { id: "eqKE", title: "Kenya   [KE]", parent: null },
    { id: "eqKI", title: "Kiribati   [KI]", parent: null },
    { id: "eqKP", title: "Korea (North)   [KP]", parent: null },
    { id: "eqKR", title: "Korea (South)   [KR]", parent: null },
    { id: "eqKW", title: "Kuwait   [KW]", parent: null },
    { id: "eqKG", title: "Kyrgyzstan   [KG]", parent: null },
    { id: "eqLA", title: "Laos   [LA]", parent: null },
    { id: "eqLV", title: "Latvia   [LV]", parent: null },
    { id: "eqLB", title: "Lebanon   [LB]", parent: null },
    { id: "eqLS", title: "Lesotho   [LS]", parent: null },
    { id: "eqLR", title: "Liberia   [LR]", parent: null },
    { id: "eqLY", title: "Libya   [LY]", parent: null },
    { id: "eqLI", title: "Liechtenstein   [LI]", parent: null },
    { id: "eqLT", title: "Lithuania   [LT]", parent: null },
    { id: "eqLU", title: "Luxembourg   [LU]", parent: null },
    { id: "eqMO", title: "Macau   [MO]", parent: null },
    { id: "eqMK", title: "Macedonia   [MK]", parent: null },
    { id: "eqMG", title: "Madagascar   [MG]", parent: null },
    { id: "eqMW", title: "Malawi   [MW]", parent: null },
    { id: "eqMY", title: "Malaysia   [MY]", parent: null },
    { id: "eqMV", title: "Maldives   [MV]", parent: null },
    { id: "eqML", title: "Mali   [ML]", parent: null },
    { id: "eqMT", title: "Malta   [MT]", parent: null },
    {
        id: "eqMH",
        title: "Marshall Islands   [MH]",
        parent: null
    },
    { id: "eqMQ", title: "Martinique   [MQ]", parent: null },
    { id: "eqMR", title: "Mauritania   [MR]", parent: null },
    { id: "eqMU", title: "Mauritius   [MU]", parent: null },
    { id: "eqYT", title: "Mayotte   [YT]", parent: null },
    { id: "eqMX", title: "Mexico   [MX]", parent: null },
    { id: "eqFM", title: "Micronesia   [FM]", parent: null },
    { id: "eqMD", title: "Moldova   [MD]", parent: null },
    { id: "eqMC", title: "Monaco   [MC]", parent: null },
    { id: "eqMN", title: "Mongolia   [MN]", parent: null },
    { id: "eqMS", title: "Montserrat   [MS]", parent: null },
    { id: "eqMA", title: "Morocco   [MA]", parent: null },
    { id: "eqMZ", title: "Mozambique   [MZ]", parent: null },
    { id: "eqMM", title: "Myanmar   [MM]", parent: null },
    { id: "eqNA", title: "Namibia   [NA]", parent: null },
    { id: "eqNR", title: "Nauru   [NR]", parent: null },
    { id: "eqNP", title: "Nepal   [NP]", parent: null },
    { id: "eqNL", title: "Netherlands   [NL]", parent: null },
    {
        id: "eqAN",
        title: "Netherlands Antilles   [AN]",
        parent: null
    },
    { id: "eqNC", title: "New Caledonia   [NC]", parent: null },
    { id: "eqNZ", title: "New Zealand   [NZ]", parent: null },
    { id: "eqNI", title: "Nicaragua   [NI]", parent: null },
    { id: "eqNE", title: "Niger   [NE]", parent: null },
    { id: "eqNG", title: "Nigeria   [NG]", parent: null },
    { id: "eqNU", title: "Niue   [NU]", parent: null },
    { id: "eqNF", title: "Norfolk Island   [NF]", parent: null },
    {
        id: "eqMP",
        title: "Northern Mariana Islands   [MP]",
        parent: null
    },
    { id: "eqNO", title: "Norway   [NO]", parent: null },
    { id: "eqOM", title: "Oman   [OM]", parent: null },
    { id: "eqPK", title: "Pakistan   [PK]", parent: null },
    { id: "eqPW", title: "Palau   [PW]", parent: null },
    { id: "eqPA", title: "Panama   [PA]", parent: null },
    {
        id: "eqPG",
        title: "Papua New Guinea   [PG]",
        parent: null
    },
    { id: "eqPY", title: "Paraguay   [PY]", parent: null },
    { id: "eqPE", title: "Peru   [PE]", parent: null },
    { id: "eqPH", title: "Philippines   [PH]", parent: null },
    { id: "eqPN", title: "Pitcairn   [PN]", parent: null },
    { id: "eqPL", title: "Poland   [PL]", parent: null },
    { id: "eqPT", title: "Portugal   [PT]", parent: null },
    { id: "eqPR", title: "Puerto Rico   [PR]", parent: null },
    { id: "eqQA", title: "Qatar   [QA]", parent: null },
    { id: "eqRE", title: "Reunion   [RE]", parent: null },
    { id: "eqRO", title: "Romania   [RO]", parent: null },
    {
        id: "eqRU",
        title: "Russian Federation   [RU]",
        parent: null
    },
    { id: "eqRW", title: "Rwanda   [RW]", parent: null },
    {
        id: "eqGS",
        title: "S.Georgia & S.Sandwich Islands   [GS]",
        parent: null
    },
    {
        id: "eqKN",
        title: "Saint Kitts & Nevis   [KN]",
        parent: null
    },
    { id: "eqLC", title: "Saint Lucia   [LC]", parent: null },
    { id: "eqWS", title: "Samoa   [WS]", parent: null },
    { id: "eqSM", title: "San Marino   [SM]", parent: null },
    {
        id: "eqST",
        title: "Sao Tome & Principe   [ST]",
        parent: null
    },
    { id: "eqSA", title: "Saudi Arabia   [SA]", parent: null },
    { id: "eqSN", title: "Senegal   [SN]", parent: null },
    { id: "eqSC", title: "Seychelles   [SC]", parent: null },
    { id: "eqSL", title: "Sierra Leone   [SL]", parent: null },
    { id: "eqSG", title: "Singapore   [SG]", parent: null },
    {
        id: "eqSK",
        title: "Slovak Republic   [SK]",
        parent: null
    },
    { id: "eqSI", title: "Slovenia   [SI]", parent: null },
    {
        id: "eqSB",
        title: "Solomon Islands   [SB]",
        parent: null
    },
    { id: "eqSO", title: "Somalia   [SO]", parent: null },
    { id: "eqZA", title: "South Africa   [ZA]", parent: null },
    { id: "eqES", title: "Spain   [ES]", parent: null },
    { id: "eqLK", title: "Sri Lanka   [LK]", parent: null },
    { id: "eqSH", title: "St. Helena   [SH]", parent: null },
    {
        id: "eqPM",
        title: "St. Pierre & Miquelon   [PM]",
        parent: null
    },
    {
        id: "eqVC",
        title: "St. Vincent & the Grenadines   [VC]",
        parent: null
    },
    { id: "eqSD", title: "Sudan   [SD]", parent: null },
    { id: "eqSR", title: "Suriname   [SR]", parent: null },
    {
        id: "eqSJ",
        title: "Svalbard & Jan Mayen Islands   [SJ]",
        parent: null
    },
    { id: "eqSZ", title: "Swaziland   [SZ]", parent: null },
    { id: "eqSE", title: "Sweden   [SE]", parent: null },
    { id: "eqCH", title: "Switzerland   [CH]", parent: null },
    { id: "eqSY", title: "Syria   [SY]", parent: null },
    { id: "eqTW", title: "Taiwan   [TW]", parent: null },
    { id: "eqTJ", title: "Tajikistan   [TJ]", parent: null },
    { id: "eqTZ", title: "Tanzania   [TZ]", parent: null },
    { id: "eqTH", title: "Thailand   [TH]", parent: null },
    { id: "eqTG", title: "Togo   [TG]", parent: null },
    { id: "eqTK", title: "Tokelau   [TK]", parent: null },
    { id: "eqTO", title: "Tonga   [TO]", parent: null },
    {
        id: "eqTT",
        title: "Trinidad & Tobago   [TT]",
        parent: null
    },
    { id: "eqTN", title: "Tunisia   [TN]", parent: null },
    { id: "eqTR", title: "Turkey   [TR]", parent: null },
    { id: "eqTM", title: "Turkmenistan   [TM]", parent: null },
    {
        id: "eqTC",
        title: "Turks & Caicos Islands   [TC]",
        parent: null
    },
    { id: "eqTV", title: "Tuvalu   [TV]", parent: null },
    { id: "eqUG", title: "Uganda   [UG]", parent: null },
    { id: "eqUA", title: "Ukraine   [UA]", parent: null },
    {
        id: "eqAE",
        title: "United Arab Emirates   [AE]",
        parent: null
    },
    { id: "eqGB", title: "United Kingdom   [GB]", parent: null },
    { id: "eqUS", title: "United States   [US]", parent: null },
    { id: "eqUY", title: "Uruguay   [UY]", parent: null },
    { id: "eqUZ", title: "Uzbekistan   [UZ]", parent: null },
    { id: "eqVU", title: "Vanuatu   [VU]", parent: null },
    {
        id: "eqVA",
        title: "Vatican City (Holy See)   [VA]",
        parent: null
    },
    { id: "eqVE", title: "Venezuela   [VE]", parent: null },
    { id: "eqVN", title: "Viet Nam   [VN]", parent: null },
    {
        id: "eqVG",
        title: "Virgin Islands (British)   [VG]",
        parent: null
    },
    {
        id: "eqVI",
        title: "Virgin Islands (U.S.)   [VI]",
        parent: null
    },
    {
        id: "eqWF",
        title: "Wallis & Futuna Islands   [WF]",
        parent: null
    },
    { id: "eqEH", title: "Western Sahara   [EH]", parent: null },
    { id: "eqYE", title: "Yemen   [YE]", parent: null },
    { id: "eqYU", title: "Yugoslavia   [YU]", parent: null },
    { id: "eqCD", title: "Zaire   [CD]", parent: null },
    { id: "eqZM", title: "Zambia   [ZM]", parent: null },
    { id: "eqZW", title: "Zimbabwe   [ZW]", parent: null }
];
