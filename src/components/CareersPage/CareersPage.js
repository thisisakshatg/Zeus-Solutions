import React from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Overlay from '../Overlay/Overlay';
import ApplyForm from '../ApplyForm/ApplyForm';

const CareersPage = () => {
  const params = useParams();
  const industry = params.name;

  let title = 'Hi',
    subheading = '',
    secondarySub = '',
    subsub = '',
    primaryContent = {
      l1: '',
      l2: '',
      l3: '',
      l4: '',
      l5: '',
      l6: '',
      l7: '',
      l8: '',
      l9: '',
      l10: '',
      l11: '',
      l12: '',
      l13: '',
      l14: '',
    },
    secondaryContent = {
      l1: '',
      l2: '',
      l3: '',
      l4: '',
      l5: '',
      l6: '',
      l7: '',
      l8: '',
      l9: '',
      l10: '',
      l11: '',
      l12: '',
      l13: '',
      l14: '',
      l15: '',
      l16: '',
      l17: '',
      l18: '',
      l19: '',
      l20: '',
    };

  if (industry === 'quality-assurance-analyst') {
    title = 'Quality Assurance Analyst / Engineer';
    subheading = 'Job duties include: ';

    secondarySub = 'Must haves:';
    primaryContent.l1 =
      '● 3+ years of experience developing, executing and analyzing automation tests. Hands on experience using Selenium, Java, Javascript';
    primaryContent.l2 = '● Experience testing APIs and data integrations.';
    primaryContent.l3 =
      '● Strong ability and hands on experience to debug code independently when defects / flaws / errors are identified to assess root cause';
    primaryContent.l4 =
      '● Strong understanding of Software Testing methodologies.';
    primaryContent.l5 =
      '● Strong understanding of Agile principles. Experience working in SAFe Agile environment.';
    primaryContent.l6 =
      '● Strong understanding of Agile principles. Experience working in SAFe Agile environment.';
    primaryContent.l7 =
      '● Experience with Test Management tools – Rational Tool suite, JIRA.';
    primaryContent.l8 =
      '● BDD Testing using any industry tools such as Cucumber is a plus';
    primaryContent.l9 =
      '● Work with other colleagues, architects, Test lead and support the Design and execution for contact center related testing activities';
    primaryContent.l10 = '● Validate IVR applications';
    primaryContent.l11 =
      '● Creates test scripts according to the business requirements. Responsible for planning, creating and Executing testcases.';
    primaryContent.l12 =
      '● Creates vulnerability and data privacy validation related test scripts according to the business requirements, SOX controls and regulatory requirements. Work with stakeholders to develop success criteria and execute and ensure the outcome meets definition of done.';

    secondaryContent.l1 =
      '● Minimum 8+ years overallsoftware engineering, testing and assurance ';
    secondaryContent.l2 =
      '● 5+ years foundational automation QA testing experience – Selenium, integrations (testing APIs,data, etc), etc';
    secondaryContent.l3 =
      '● 2+ years Oil/Gas/Energy/Financial/Banking experience';
    secondaryContent.l4 =
      '● 2+ year as a Team lead –mentoring onshore, nearshore and offshore with Automation Engineers and QATesters';
    secondaryContent.l5 =
      '● Extensive background in software development and the full life cycle. Programming languages like.NET/Java/ReactJS/NodeJS/Javascript';
    secondaryContent.l6 =
      '● Worked in Agile delivery models such as SAFe Agile, DevOps';
    secondaryContent.l7 = '● Excellent communication skills';
    secondaryContent.l8 =
      '● Bachelors in ComputerScience or equivalent 4-year college degree in software, systems,statistics, math or computer applications space';
    secondaryContent.l9 = '● Strong integration experience – data, APIs, etc.';
    secondaryContent.l10 =
      '● Strong understanding of Agile and hands on in agile/scrum environments';
    secondaryContent.l11 =
      '● Huge plus: Experience and awareness of Threat intelligence, Cyber Security testing, Code Penetration testing, Network Penetration testing, Vulnerability scanning,Data privacy, Data security, Data masking. ';
    secondaryContent.l12 =
      '● Plus: Salesforceplatform or another CRM tool for testing – not admin, but understanding flows, screen testing, etc ';
  }
  if (industry === 'software-engineer') {
    title = 'JOB ID 10390 Software Engineer';
    subsub =
      'Zeus Solutions Inc, a Houston, Texas-based IT Solutions and Services Company has multiple openings for Software engineer.';
    subheading = ' Job duties include: ';
    primaryContent.l1 =
      '● Plan and execute unit, integration, and acceptance testing.';
    primaryContent.l2 =
      '● Develop, identify, evaluate, analyze: functional and technical specifications, software solutions, systems specifications, and procedures to meet business requirements.';
    primaryContent.l3 =
      '● Develop and implement quality assurance procedures and systems.';
    primaryContent.l4 =
      '● Design, develop and implement enterprise-wide, multi-tier computer systems';
    primaryContent.l5 =
      '● Analyze, design, architect, and implement software solutions for clients';
    primaryContent.l6 =
      '● Work on software development life cycle in building Data warehouse solutions.';
    primaryContent.l7 =
      '● Ability to work with clients to in the Energy / Financial Services/ health care / Energy/ manufacturing industries ';
    primaryContent.l8 =
      '●  Create data tools for analytics and data scientist team members that assist them in building and optimizing software products.  ';
    primaryContent.l9 =
      '● Perform root cause analysis on internal and external data and processes to answer specific business questions and identify opportunities for improvement';
    primaryContent.l10 =
      '● Requirements Gathering, designing and developing ETL solutions using Informatica PowerCenter 6.x and above, Business Objects, SQL, PL/SQL, Oracle, SQL Server; testing; implementing and supporting data warehouses, XML, Access; Linux/UNIX- C++/Shell-script; TOAD; VSS/SVN; and MS Windows/Office/DOS; Clear Quest, Mercury Quality Center.';
    primaryContent.l11 =
      '● Requirements: Bachelor’s degree in CS/IT/ Comp Appln/Engg/Science/Math or related with at least 60 months of experience. Send resume to: bala.narasimhan@zeussolutionsinc.com including the JOB ID. Travel and relocation to various unanticipated client locations throughout the United States may be required. Equal Opportunity Employer.  ';
  }

  if (industry === 'data-engineer') {
    title = 'Data Engineer';
    subheading = 'Responsibilities for Data Engineer';
    secondarySub = 'Qualifications for Senior Data Engineer';

    primaryContent.l1 =
      '● Create and maintain optimal data pipeline architecture. ';
    primaryContent.l2 =
      '● Assemble large, complex data sets that meet functional / non-functional business requirements.';
    primaryContent.l3 =
      '● Identify, design, and implement internal process improvements: automating manual processes, optimizing data delivery, re-designing infrastructure for greater scalability, etc.';
    primaryContent.l4 =
      '● Build the infrastructure required for optimal extraction, transformation, and loading of data from a wide variety of data sources using SQL and Azure ‘big data’ technologies.';
    primaryContent.l5 =
      '● Build analytics tools that utilize the data pipeline to provide actionable insights into customer acquisition, operational efficiency and other key business performance metrics.';
    primaryContent.l6 =
      '● Work with stakeholders including the Executive, Product, Data and Design teams to assist with data-related technical issues and support their data infrastructure needs.';
    primaryContent.l7 =
      '● Keep our data separated and secure across national boundaries through multiple data centers and Azure, AWS regions.';
    primaryContent.l8 =
      '● Create data tools for analytics and data scientist team members that assist them in building and optimizing our product into an innovative industry leader.';
    primaryContent.l9 =
      '● Work with data and analytics experts to strive for greater functionality in our data systems.';

    secondaryContent.l1 =
      '● Advanced working SQL knowledge and experience working with relational databases, query authoring (SQL) as well as working familiarity with a variety of databases. ';
    secondaryContent.l2 =
      '● Experience building and optimizing ‘big data’ data pipelines, architectures and data sets.';
    secondaryContent.l3 =
      '● Experience performing root cause analysis on internal and external data and processes to answer specific business questions and identify opportunities for improvement.';
    secondaryContent.l4 =
      '● Strong analytic skills related to working with unstructured datasets.';
    secondaryContent.l5 =
      '● Build processes supporting data transformation, data structures, metadata, dependency and workload management.';
    secondaryContent.l6 =
      '● A successful history of manipulating, processing and extracting value from large disconnected datasets.';
    secondaryContent.l7 =
      '● Working knowledge of message queuing, stream processing, and highly scalable ‘big data’ data stores.';
    secondaryContent.l8 =
      '● Experience supporting and working with cross-functional teams in a dynamic environment.';
    secondaryContent.l9 =
      'We are looking for a candidate around 5 years of experience in a Data Engineer role, who has attained a Graduate degree in Computer Science, Statistics, Informatics, Information Systems or another quantitative field. They should also have experience using the following software/tools:';
    secondaryContent.l10 =
      '● Experience with Azure: ADLS, Databricks, Stream Analytics, SQL DW, COSMOS DB, Analysis Services, Azure Functions, Serverless Architecture, ARM Templates';
    secondaryContent.l11 =
      '● Experience with relational SQL and NoSQL databases, including Postgres and Cassandra.';
    secondaryContent.l12 =
      '● Experience with object-oriented/object function scripting languages: Python, SQL, Scala, Spark-SQL, pyspark etc.';
    secondaryContent.l13 =
      '● Nice to have experience with big data tools: Hadoop, Spark, Kafka, etc.';
    secondaryContent.l14 =
      '● Nice to have experience with data pipeline and workflow management tools: Azkaban, Luigi, Airflow, etc.';
    secondaryContent.l15 =
      '● Nice to have experience with stream-processing systems: Storm';
    secondaryContent.l16 =
      '● Nice to have experience in Devops, Git Strategy & CICD Pipelines.';
    secondaryContent.l17 =
      '● Good to have experience in Azure Data factory Data pipeline optimisation techniques.';
    secondaryContent.l18 =
      '● Good understanding of system design, ingestion frameworks & Connection Services.';
    secondaryContent.l19 =
      '● Good to have experience in Azure Analysis Services, Data Modelling & Any reporting tool like Power BI.';
    secondaryContent.l20 = 'Send your resume to : hr@zeussolutionsinc.com';
  }

  if (industry === 'aws-data-engineer') {
    title = 'AWS Data Engineer';
    subheading = 'Responsibilities for AWS Data Engineer';

    primaryContent.l1 =
      '● Python-5 years experience (Expert skill level)- must have additional experience with Go – NodeJS helpful';
    primaryContent.l2 =
      '● Spark (Java, or Python) -3 years experience (Expert skill level) – Spark, Pyspark experience';
    primaryContent.l3 =
      '● Data Pipeline (e.g. Airflow) -3 years experience (Expert skill level) – Airflow or similar tools – Highly prefer Airflow experience';
    primaryContent.l4 =
      '● Components of AWS ( Platform, Data storage, Network and Security etc) -3-5 years experience (Expert skill level) – Must have working exp with AWS (e.g. S3, RDS)';
    primaryContent.l5 =
      '● Open Source Technologies -3-5 years experience (Expert skill level) -See above (e.g. Spark, Airflow)';
    primaryContent.l6 =
      '● Gitlab CI/CD-3 years experience – Prefer Gitlab but Github ‘Actions’ experience ok';
    primaryContent.l7 =
      '● Messaging, IoT / Telemetry-3 years experience (Expert skill level) – Must have Kafka, spark streaming – Preferably AWS IoT, MQTT (Device level communications)';
    primaryContent.l8 =
      '● GraphQL (Apollo, Hasura) -1 year Knowledge- Prefer knowledge in Apollo or Hasura';
    primaryContent.l9 =
      '● Components of Azure-1 year Knowledge – Generally not looking for Azure experts (Nice to have)';
    primaryContent.l10 = '● Kubernetes-1 year Knowledge';

    primaryContent.l11 = 'Send your resume to : hr@zeussolutionsinc.com';
  }

  if (industry === 'data-scientist') {
    title = 'Data Scientist';
    subsub =
      'We are looking for a Data Scientist to help develop advanced analytics use cases for the logistics and supply functions for our Specialty Chemicals client in Houston.The ideal candidate is adept at discovering insights hidden in large data sets and working with stakeholders to generate business value. The Candidate must have strong experience using a variety of data analysis techniques and data tools, building and implementing machine learning models, using/creating algorithms, and performing error analysis.';
    secondarySub = 'Qualifications: ';
    secondaryContent.l1 = '● Good analytical and problem-solving abilities.';
    secondaryContent.l2 =
      '● Experience using statistical computer languages (R, Python, SLQ, etc.) to manipulate data and draw insights from large data sets.';
    secondaryContent.l3 =
      '● Knowledge of advanced statistical techniques and concepts (regression, properties of distributions, statistical tests and proper usage, etc.) and experience with applications.';
    secondaryContent.l4 =
      '● Experience creating and using advanced machine learning algorithms and statistics: regression, simulation, scenario analysis, modeling, clustering, decision trees, neural networks, etc.';
    secondaryContent.l5 =
      '● Experience with processes and tools to monitor and analyze model performance and data accuracy.';
    secondaryContent.l6 =
      '● Strong oral and written communication skills, especially around analytical concepts and methods.';
  }

  if (industry === 'spotfire-developer') {
    title = 'Spotfire Developer';
    primaryContent.l1 = 'Send your resume to : hr@zeussolutionsinc.com';
  }

  if (industry === 'power-bi-developer') {
    title = 'Power Bi Developer';
    subheading = 'Send your resume to : hr@zeussolutionsinc.com';
  }

  if (industry === 'java-developer') {
    title = 'Java - Full Stack Developer';
    subheading = 'Send your resume to : hr@zeussolutionsinc.com';
  }

  if (industry === 'commodities-trading-and-risk-management-business-analyst') {
    title = 'Commodities Trading and Risk Management Business Analyst';
    subheading = 'Send your resume to : hr@zeussolutionsinc.com';
  }

  if (industry === 'energy-trading-and-risk-management-expert') {
    title = 'Energy Trading and Risk Management Expert';
    subheading = 'Send your resume to : hr@zeussolutionsinc.com';
  }

  if (industry === 'finance-and-restructuring-expert') {
    title = 'Finance and Restructuring Expert';
    subheading = 'Send your resume to : hr@zeussolutionsinc.com';
  }

  const [newPostOverlay, setNewPostOverlay] = useState(false);

  const newPostOverlayHandler = () => {
    setNewPostOverlay(!newPostOverlay);
  };

  return (
    <div>
      <section className="section-industry-page">
        {newPostOverlay && (
          <Overlay>
            <ApplyForm newPostOverlayHandler={newPostOverlayHandler} />
          </Overlay>
        )}
        <div className="full-img img-careersPage">
          <Header />
          <section class="section-contact-us">
            <div class="container">
              <h1 className="heading-primary contact-primary">Careers</h1>
            </div>
          </section>
        </div>
        <div class="container about-div div-career-desc">
          <div class="about-div-1">
            <h2 class="heading-secondary">{title}</h2>
            <h2 class="subsub">{subsub}</h2>
            <h2 class="heading-tertiary">{subheading}</h2>
            {/* <p class="feature-text tertiary-industry-page">{primaryContent}</p> */}

            {/* PRIMARY CONTENT */}
            <ul class="list">
              {primaryContent.l1 != '' && (
                <li class="list-item">
                  <span>{primaryContent.l1}</span>
                </li>
              )}
              {primaryContent.l2 != '' && (
                <li class="list-item">
                  <span>{primaryContent.l2}</span>
                </li>
              )}
              {primaryContent.l3 != '' && (
                <li class="list-item">
                  <span>{primaryContent.l3}</span>
                </li>
              )}
              {primaryContent.l4 != '' && (
                <li class="list-item">
                  <span>{primaryContent.l4}</span>
                </li>
              )}
              {primaryContent.l5 != '' && (
                <li class="list-item">
                  <span>{primaryContent.l6}</span>
                </li>
              )}
              {primaryContent.l7 != '' && (
                <li class="list-item">
                  <span>{primaryContent.l7}</span>
                </li>
              )}
              {primaryContent.l8 != '' && (
                <li class="list-item">
                  <span>{primaryContent.l8}</span>
                </li>
              )}
              {primaryContent.l9 != '' && (
                <li class="list-item">
                  <span>{primaryContent.l9}</span>
                </li>
              )}
              {primaryContent.l10 != '' && (
                <li class="list-item">
                  <span>{primaryContent.l10}</span>
                </li>
              )}
              {primaryContent.l11 != '' && (
                <li class="list-item">
                  <span>{primaryContent.l11}</span>
                </li>
              )}
              {primaryContent.l12 != '' && (
                <li class="list-item">
                  <span>{primaryContent.l12}</span>
                </li>
              )}
              {primaryContent.l13 != '' && (
                <li class="list-item">
                  <span>{primaryContent.l13}</span>
                </li>
              )}
            </ul>
            <h2 class="heading-tertiary">{secondarySub}</h2>

            {/* SECONDARY CONETN */}
            <ul class="list">
              {secondaryContent.l1 && (
                <li class="list-item">
                  <span>{secondaryContent.l1}</span>
                </li>
              )}
              {secondaryContent.l2 && (
                <li class="list-item">
                  <span>{secondaryContent.l2}</span>
                </li>
              )}
              {secondaryContent.l3 && (
                <li class="list-item">
                  <span>{secondaryContent.l3}</span>
                </li>
              )}
              {secondaryContent.l4 && (
                <li class="list-item">
                  <span>{secondaryContent.l4}</span>
                </li>
              )}
              {secondaryContent.l5 && (
                <li class="list-item">
                  <span>{secondaryContent.l5}</span>
                </li>
              )}
              {secondaryContent.l6 && (
                <li class="list-item">
                  <span>{secondaryContent.l6}</span>
                </li>
              )}
              {secondaryContent.l7 && (
                <li class="list-item">
                  <span>{secondaryContent.l7}</span>
                </li>
              )}
              {secondaryContent.l8 && (
                <li class="list-item">
                  <span>{secondaryContent.l8}</span>
                </li>
              )}
              {secondaryContent.l9 && (
                <li class="list-item">
                  <span>{secondaryContent.l9}</span>
                </li>
              )}
              {secondaryContent.l10 && (
                <li class="list-item">
                  <span>{secondaryContent.l10}</span>
                </li>
              )}
              {secondaryContent.l11 && (
                <li class="list-item">
                  <span>{secondaryContent.l11}</span>
                </li>
              )}
              {secondaryContent.l12 && (
                <li class="list-item">
                  <span>{secondaryContent.l12}</span>
                </li>
              )}
              {secondaryContent.l13 && (
                <li class="list-item">
                  <span>{secondaryContent.l13}</span>
                </li>
              )}
              {secondaryContent.l14 && (
                <li class="list-item">
                  <span>{secondaryContent.l14}</span>
                </li>
              )}
              {secondaryContent.l15 && (
                <li class="list-item">
                  <span>{secondaryContent.l15}</span>
                </li>
              )}
              {secondaryContent.l16 && (
                <li class="list-item">
                  <span>{secondaryContent.l16}</span>
                </li>
              )}
              {secondaryContent.l17 && (
                <li class="list-item">
                  <span>{secondaryContent.l17}</span>
                </li>
              )}
              {secondaryContent.l18 && (
                <li class="list-item">
                  <span>{secondaryContent.l18}</span>
                </li>
              )}
              {secondaryContent.l19 && (
                <li class="list-item">
                  <span>{secondaryContent.l19}</span>
                </li>
              )}
              {secondaryContent.l20 && (
                <li class="list-item">
                  <span>{secondaryContent.l20}</span>
                </li>
              )}
            </ul>
            <button
              className="btn btn--full btn-card btn--apply btn-desc"
              onClick={newPostOverlayHandler}
              style={{ marginBottom: '2rem' }}
            >
              Apply Now
            </button>
          </div>
        </div>
        <br></br>
      </section>
    </div>
  );
};

export default CareersPage;
