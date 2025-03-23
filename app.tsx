// Add border styling to main container
<div
  className='invoice-container'
  style={{
    border: '1px solid #000',
    padding: '20px',
    margin: '20px'
  }}
>
  {/* Company header section */}
  <div style={{ border: '1px solid #000', padding: '10px', marginBottom: '15px' }}>
    {/* ... company details ... */}
  </div>

  {/* Invoice To section */}
  <div style={{ border: '1px solid #000', padding: '10px', marginBottom: '15px' }}>
    {/* ... invoice to details ... */}
  </div>

  {/* Main items table */}
  <table
    style={{
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '15px'
    }}
  >
    <thead>
      <tr>
        {headers.map((header) => (
          <th style={{ border: '1px solid #000', padding: '8px' }}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr>
          <td style={{ border: '1px solid #000', padding: '8px' }}>{/* ... */}</td>
          {/* ... other cells ... */}
        </tr>
      ))}
    </tbody>
  </table>

  {/* Bottom section with declaration and bank details */}
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px',
      border: '1px solid #000',
      padding: '10px'
    }}
  >
    {/* ... declaration and bank details ... */}
  </div>
</div>;
