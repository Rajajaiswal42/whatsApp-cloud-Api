import './App.css';
import './Invoice.css';

export default function App() {
  // const [count, setCount] = useState(0);

  // const sendMessage = async () => {
  //   const data = await axios.post('http://localhost:3000/send-message', {
  //     phoneNumber: '917484052699',
  //     message: 'payment_confirmation'
  //   });
  //   console.log(data);
  // };

  // const register = async () => {
  //   const data = await axios.post('http://localhost:3000/register', {
  //     pin: '123456'
  //   });
  //   console.log(data);
  // };

  return (
    <>
      {/* <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <button onClick={sendMessage}>Send message</button> */}
      {/* <button onClick={register}>Register</button> */}
      <div
        id='page1-div'
        style={{
          position: 'relative',
          width: '892px',
          height: '1262px',
          margin: '20px'
        }}
      >
        {/* Header Section with Company Details */}
        <div
          style={{
            position: 'absolute',
            top: '52px',
            left: '52px',
            width: '800px',
            border: '1px solid black',
            padding: '10px',
            marginBottom: '20px'
          }}
        >
          <img width='892' height='1262' src='target001.png' alt='background image' />
          <p
            style={{
              position: 'absolute',
              top: '55px',
              left: '381px',
              whiteSpace: 'nowrap'
            }}
            className='ft10'
          >
            <b>TAX INVOICE</b>
          </p>
          <p
            style={{
              position: 'absolute',
              top: '454px',
              left: '69px',
              whiteSpace: 'nowrap',
              border: '1px solid black'
            }}
            className='ft11'
          >
            <b>NO&#160;PARTICULARS</b>
          </p>
          <p
            style={{ position: 'absolute', top: '436px', left: '409px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>HSN</b>
          </p>
          <p
            style={{ position: 'absolute', top: '454px', left: '409px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>No</b>
          </p>
          <p
            style={{ position: 'absolute', top: '454px', left: '455px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>QTY&#160;RATE&#160;AMOUNT&#160;TAX</b>
          </p>
          <p
            style={{ position: 'absolute', top: '436px', left: '663px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>Tax</b>
          </p>
          <p
            style={{ position: 'absolute', top: '454px', left: '663px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>Value</b>
          </p>
          <p
            style={{ position: 'absolute', top: '436px', left: '717px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>AMOUNT</b>
          </p>
          <p
            style={{ position: 'absolute', top: '454px', left: '717px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>With Tax</b>
          </p>
          <p
            style={{ position: 'absolute', top: '486px', left: '65px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            1.
          </p>
          <p
            style={{ position: 'absolute', top: '486px', left: '98px', whiteSpace: 'nowrap' }}
            className='ft19'
          >
            <b>
              PRINT&#160;ON DEMAND JC67776
              <br />
              Book Name:&#160;
            </b>
            Std. 11_(Sci)_EM_Maths_Part 2_2024_Unit&#160;Test_Final,
            <br />
            <b>Book Code:&#160;</b>0,<b>&#160;Paper type:</b>&#160;A4 58 gsm Maplitho,&#160;
            <b>Bw:</b>
            &#160;16,&#160;<b>Clr:</b>&#160;0,&#160;
            <b>
              Cover
              <br />
              Pages:
            </b>
            &#160;2&#160;<b>Lamination:&#160;</b>none
          </p>
          <p
            style={{ position: 'absolute', top: '486px', left: '405px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            4901
          </p>
          <p
            style={{ position: 'absolute', top: '486px', left: '451px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            60.0
          </p>
          <p
            style={{ position: 'absolute', top: '486px', left: '492px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            8.6
          </p>
          <p
            style={{ position: 'absolute', top: '486px', left: '540px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            516.0
          </p>
          <p
            style={{ position: 'absolute', top: '486px', left: '612px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            5.0% GST&#160;25.80
          </p>
          <p
            style={{ position: 'absolute', top: '486px', left: '713px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            541.8
          </p>
          <p
            style={{ position: 'absolute', top: '547px', left: '65px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            2.
          </p>
          <p
            style={{ position: 'absolute', top: '547px', left: '98px', whiteSpace: 'nowrap' }}
            className='ft111'
          >
            <b>
              PRINT&#160;ON DEMAND JC67775
              <br />
              Book Name:&#160;
            </b>
            Part 2_Std-11_EM_Maths_Booklet_Chapter_8 to 14_Page
            <br />1 to 96_Final,<b>&#160;Book Code:&#160;</b>0,<b>&#160;Paper type:</b>&#160;A4 58
            gsm Maplitho,&#160;<b>Bw:</b>&#160;96,
            <br />
            <b>Clr:</b>&#160;0,&#160;<b>Cover Pages:</b>&#160;0&#160;<b>Lamination:&#160;</b>glossy
          </p>
          <p
            style={{ position: 'absolute', top: '547px', left: '405px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            4901
          </p>
          <p
            style={{ position: 'absolute', top: '547px', left: '451px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            60.0
          </p>
          <p
            style={{ position: 'absolute', top: '547px', left: '492px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            48.6
          </p>
          <p
            style={{ position: 'absolute', top: '547px', left: '540px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            2916.0
          </p>
          <p
            style={{ position: 'absolute', top: '547px', left: '612px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            5.0% GST&#160;145.80
          </p>
          <p
            style={{ position: 'absolute', top: '547px', left: '713px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            3061.8
          </p>
          <p
            style={{ position: 'absolute', top: '609px', left: '65px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            3.
          </p>
          <p
            style={{ position: 'absolute', top: '609px', left: '98px', whiteSpace: 'nowrap' }}
            className='ft110'
          >
            <b>
              PRINT&#160;ON DEMAND JC67774
              <br />
              Book Name:&#160;
            </b>
            0_Final_Std-11 Sci.(EM)_Maths_Part 2_Chapter_8 to
            <br />
            14_Page_1 to 352_Final,<b>&#160;Book Code:&#160;</b>0,<b>&#160;Paper type:</b>
            &#160;8.5x11 58 gsm
            <br />
            Maplitho,&#160;<b>Bw:</b>&#160;352,&#160;<b>Clr:</b>&#160;0,&#160;<b>Cover Pages:</b>
            &#160;0&#160;<b>Lamination:&#160;</b>glossy
          </p>
          <p
            style={{ position: 'absolute', top: '609px', left: '405px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            4901
          </p>
          <p
            style={{ position: 'absolute', top: '609px', left: '451px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            60.0
          </p>
          <p
            style={{ position: 'absolute', top: '609px', left: '492px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            213.6
          </p>
          <p
            style={{ position: 'absolute', top: '609px', left: '540px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            12816.0
          </p>
          <p
            style={{ position: 'absolute', top: '609px', left: '612px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            5.0% GST&#160;640.80
          </p>
          <p
            style={{ position: 'absolute', top: '609px', left: '713px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            13456.8
          </p>
          <p
            style={{ position: 'absolute', top: '836px', left: '52px', whiteSpace: 'nowrap' }}
            className='ft14'
          >
            Tax Summary
          </p>
          <p
            style={{ position: 'absolute', top: '872px', left: '211px', whiteSpace: 'nowrap' }}
            className='ft13'
          >
            <b>RATE</b>
          </p>
          <p
            style={{ position: 'absolute', top: '872px', left: '473px', whiteSpace: 'nowrap' }}
            className='ft13'
          >
            <b>TAX</b>
          </p>
          <p
            style={{ position: 'absolute', top: '872px', left: '680px', whiteSpace: 'nowrap' }}
            className='ft13'
          >
            <b>NET</b>
          </p>
          <p
            style={{ position: 'absolute', top: '886px', left: '194px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            SGST&#160;@ 2.5%
          </p>
          <p
            style={{ position: 'absolute', top: '886px', left: '467px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            406.20
          </p>
          <p
            style={{ position: 'absolute', top: '886px', left: '669px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            16248.00
          </p>
          <p
            style={{ position: 'absolute', top: '900px', left: '194px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            CGST&#160;@ 2.5%
          </p>
          <p
            style={{ position: 'absolute', top: '900px', left: '467px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            406.20
          </p>
          <p
            style={{ position: 'absolute', top: '900px', left: '669px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            16248.00
          </p>
          <p
            style={{ position: 'absolute', top: '92px', left: '52px', whiteSpace: 'nowrap' }}
            className='ft15'
          >
            <b>Star Copiers Pvt. Ltd.</b>
          </p>
          <p
            style={{ position: 'absolute', top: '127px', left: '52px', whiteSpace: 'nowrap' }}
            className='ft16'
          >
            728A, Gokhale Shan, Opp. Post Office, Kumthekar Road, Pune - 411030
          </p>
          <p
            style={{ position: 'absolute', top: '150px', left: '52px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>Contact:&#160;</b>
          </p>
          <p
            style={{ position: 'absolute', top: '148px', left: '110px', whiteSpace: 'nowrap' }}
            className='ft16'
          >
            020 - 24479201 / 24494436,starcopiers@gmail.com
          </p>
          <p
            style={{ position: 'absolute', top: '171px', left: '52px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>CIN&#160;</b>
          </p>
          <p
            style={{ position: 'absolute', top: '169px', left: '79px', whiteSpace: 'nowrap' }}
            className='ft16'
          >
            -U22219PN2006PTC128372
          </p>
          <p
            style={{ position: 'absolute', top: '192px', left: '52px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>GSTIN -</b>
          </p>
          <p
            style={{ position: 'absolute', top: '190px', left: '101px', whiteSpace: 'nowrap' }}
            className='ft16'
          >
            27AAKCS6568G1ZT
          </p>
          <p
            style={{ position: 'absolute', top: '240px', left: '63px', whiteSpace: 'nowrap' }}
            className='ft17'
          >
            <b>Invoice To</b>
          </p>
          <p
            style={{ position: 'absolute', top: '273px', left: '75px', whiteSpace: 'nowrap' }}
            className='ft17'
          >
            <b>Horizon Printers</b>
          </p>
          <p
            style={{ position: 'absolute', top: '315px', left: '75px', whiteSpace: 'nowrap' }}
            className='ft113'
          >
            libertypublications2018@gmail.com
            <br />
            8128452567
            <br />
            GSTIN:24ANSPP6963C1ZL
          </p>
          <p
            style={{ position: 'absolute', top: '249px', left: '568px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>Invoice No:</b>
          </p>
          <p
            style={{ position: 'absolute', top: '249px', left: '694px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>99049</b>
          </p>
          <p
            style={{ position: 'absolute', top: '276px', left: '568px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>Date:</b>
          </p>
          <p
            style={{ position: 'absolute', top: '276px', left: '694px', whiteSpace: 'nowrap' }}
            className='ft18'
          >
            20-12-2024
          </p>
          <p
            style={{ position: 'absolute', top: '304px', left: '568px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>MOP:</b>
          </p>
          <p
            style={{ position: 'absolute', top: '304px', left: '694px', whiteSpace: 'nowrap' }}
            className='ft18'
          >
            CREDIT
          </p>
          <p
            style={{ position: 'absolute', top: '698px', left: '52px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>Declaration</b>
          </p>
          <p
            style={{ position: 'absolute', top: '718px', left: '52px', whiteSpace: 'nowrap' }}
            className='ft113'
          >
            We declare that this invoice shows
            <br />
            the actual price of the goods
            <br />
            described and that all particulars
            <br />
            are true and correct.
          </p>
          <p
            style={{ position: 'absolute', top: '698px', left: '312px', whiteSpace: 'nowrap' }}
            className='ft114'
          >
            <b>
              Bank Details
              <br />
              Account No -
            </b>
          </p>
          <p
            style={{ position: 'absolute', top: '717px', left: '396px', whiteSpace: 'nowrap' }}
            className='ft16'
          >
            &#160;0548102000009201
          </p>
          <p
            style={{ position: 'absolute', top: '740px', left: '312px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>Account Name -</b>
          </p>
          <p
            style={{ position: 'absolute', top: '738px', left: '414px', whiteSpace: 'nowrap' }}
            className='ft16'
          >
            &#160;
          </p>
          <p
            style={{ position: 'absolute', top: '740px', left: '418px', whiteSpace: 'nowrap' }}
            className='ft18'
          >
            Star Copiers Pvt. Ltd.
          </p>
          <p
            style={{ position: 'absolute', top: '761px', left: '312px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>Bank Name -</b>
          </p>
          <p
            style={{ position: 'absolute', top: '759px', left: '393px', whiteSpace: 'nowrap' }}
            className='ft16'
          >
            &#160;
          </p>
          <p
            style={{ position: 'absolute', top: '761px', left: '397px', whiteSpace: 'nowrap' }}
            className='ft18'
          >
            IDBI Bank
          </p>
          <p
            style={{ position: 'absolute', top: '782px', left: '312px', whiteSpace: 'nowrap' }}
            className='ft11'
          >
            <b>IFSC -</b>IBKL0000548
          </p>
          <p
            style={{ position: 'absolute', top: '696px', left: '746px', whiteSpace: 'nowrap' }}
            className='ft16'
          >
            16248.00
          </p>
          <p
            style={{ position: 'absolute', top: '717px', left: '762px', whiteSpace: 'nowrap' }}
            className='ft16'
          >
            812.40
          </p>
          <p
            style={{ position: 'absolute', top: '738px', left: '746px', whiteSpace: 'nowrap' }}
            className='ft16'
          >
            17060.40
          </p>
          <p
            style={{ position: 'absolute', top: '759px', left: '775px', whiteSpace: 'nowrap' }}
            className='ft16'
          >
            -0.40
          </p>
          <p
            style={{ position: 'absolute', top: '781px', left: '571px', whiteSpace: 'nowrap' }}
            className='ft17'
          >
            <b>TOTAL&#160;AMOUNT</b>
          </p>
          <p
            style={{ position: 'absolute', top: '781px', left: '749px', whiteSpace: 'nowrap' }}
            className='ft16'
          >
            Rs17060
          </p>
          <p
            style={{ position: 'absolute', top: '696px', left: '583px', whiteSpace: 'nowrap' }}
            className='ft115'
          >
            <b>
              SUBTOTAL
              <br />
              TAX
              <br />
              TOTAL
              <br />
              ROUND OFF
            </b>
          </p>
          <p
            style={{ position: 'absolute', top: '929px', left: '290px', whiteSpace: 'nowrap' }}
            className='ft12'
          >
            This is a computer generated invoice, A signature is not required.
          </p>
        </div>

        {/* Invoice Details Box */}
        <div
          style={{
            position: 'absolute',
            top: '240px',
            left: '52px',
            width: '800px',
            border: '1px solid black',
            padding: '10px'
          }}
        >
          {/* existing invoice details content */}
        </div>

        {/* Items Table */}
        <div
          style={{
            position: 'absolute',
            top: '436px',
            left: '52px',
            width: '800px',
            border: '1px solid black',
            borderCollapse: 'collapse'
          }}
        >
          {/* Table Headers with borders */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '50px 300px 80px 80px 80px 80px 80px',
              borderBottom: '1px solid black'
            }}
          >
            {/* Add your table headers here */}
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            position: 'absolute',
            top: '698px',
            left: '52px',
            width: '800px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '10px'
          }}
        >
          {/* Declaration Box */}
          <div style={{ border: '1px solid black', padding: '10px' }}>
            {/* Declaration content */}
          </div>

          {/* Bank Details Box */}
          <div style={{ border: '1px solid black', padding: '10px' }}>
            {/* Bank details content */}
          </div>

          {/* Amount Summary Box */}
          <div style={{ border: '1px solid black', padding: '10px' }}>
            {/* Amount summary content */}
          </div>
        </div>
      </div>
      ;
    </>
  );
}
