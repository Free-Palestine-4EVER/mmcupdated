import * as React from 'react';

interface ClientConfirmationEmailProps {
  customerName: string;
  arrivalDate: string;
  numPeople: number;
  accommodation?: string;
  tours: string[];
  packageName?: string;
  packageDuration?: string;
  packageIncludes?: string[];
  finalPrice: number;
  transportNeeded?: boolean;
  transportDetails?: string;
  vegetarian?: boolean;
  foodAllergies?: string;
  specialRequests?: string;
}

export const ClientConfirmationEmail = ({
  customerName,
  arrivalDate,
  numPeople,
  accommodation,
  tours,
  packageName,
  packageDuration,
  packageIncludes,
  finalPrice,
  transportNeeded,
  transportDetails,
  vegetarian,
  foodAllergies,
  specialRequests,
}: ClientConfirmationEmailProps) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <style>
        {`
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
          }
          .header {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
            padding: 40px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
          }
          .content {
            padding: 30px 20px;
          }
          .section {
            margin-bottom: 30px;
          }
          .section-title {
            color: #d97706;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 15px;
            border-bottom: 2px solid #f59e0b;
            padding-bottom: 8px;
          }
          .info-box {
            background-color: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 15px;
            margin: 15px 0;
            border-radius: 4px;
          }
          .arrival-step {
            background-color: #f9fafb;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
          }
          .arrival-step h4 {
            margin: 0 0 10px 0;
            color: #d97706;
            font-size: 16px;
          }
          .gps-link {
            display: inline-block;
            background-color: #10b981;
            color: white;
            padding: 8px 16px;
            text-decoration: none;
            border-radius: 6px;
            margin-top: 8px;
            font-size: 14px;
          }
          .whatsapp-button {
            display: inline-block;
            background-color: #25D366;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            font-size: 16px;
            margin: 20px 0;
            text-align: center;
          }
          .whatsapp-button:hover {
            background-color: #128C7E;
          }
          ul {
            list-style-type: none;
            padding-left: 0;
          }
          ul li:before {
            content: "• ";
            color: #f59e0b;
            font-weight: bold;
            font-size: 18px;
            margin-right: 8px;
          }
          .price-summary {
            background-color: #fef3c7;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .price-row {
            display: flex;
            justify-content: space-between;
            margin: 8px 0;
          }
          .total-price {
            font-size: 24px;
            font-weight: bold;
            color: #d97706;
            border-top: 2px solid #f59e0b;
            padding-top: 10px;
            margin-top: 10px;
          }
          .footer {
            background-color: #1f2937;
            color: white;
            padding: 30px 20px;
            text-align: center;
          }
          .footer a {
            color: #f59e0b;
            text-decoration: none;
          }
          @media only screen and (max-width: 600px) {
            .header h1 {
              font-size: 24px;
            }
            .whatsapp-button {
              display: block;
              width: 100%;
            }
          }
        `}
      </style>
    </head>
    <body>
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>🏜️ Your Wadi Rum Reservation</h1>
          <p style={{ margin: '10px 0 0 0', fontSize: '16px' }}>Arrival Details & Important Information</p>
        </div>

        {/* Content */}
        <div className="content">
          {/* Greeting */}
          <p style={{ fontSize: '16px', marginBottom: '20px' }}>
            Dear <strong>{customerName}</strong>,
          </p>

          <p style={{ fontSize: '16px', marginBottom: '20px' }}>
            Thank you for your reservation! We're delighted to welcome you to Wadi Rum and ensure you have a smooth and unforgettable desert experience.
          </p>

          {/* Booking Summary */}
          <div className="section">
            <h3 className="section-title">📋 Your Booking Summary</h3>
            <div className="price-summary">
              <div className="price-row">
                <span><strong>Arrival Date:</strong></span>
                <span>{arrivalDate}</span>
              </div>
              <div className="price-row">
                <span><strong>Number of People:</strong></span>
                <span>{numPeople} {numPeople === 1 ? 'person' : 'people'}</span>
              </div>

              {packageName && (
                <>
                  <div className="price-row">
                    <span><strong>Package:</strong></span>
                    <span>{packageName}</span>
                  </div>
                  {packageDuration && (
                    <div className="price-row">
                      <span><strong>Duration:</strong></span>
                      <span>{packageDuration}</span>
                    </div>
                  )}
                </>
              )}

              {!packageName && accommodation && (
                <div className="price-row">
                  <span><strong>Accommodation:</strong></span>
                  <span>{accommodation}</span>
                </div>
              )}

              <div className="price-row total-price">
                <span>Total Price:</span>
                <span>{finalPrice.toFixed(2)} JOD</span>
              </div>
            </div>
          </div>

          {/* Itinerary */}
          {packageName && packageIncludes && packageIncludes.length > 0 && (
            <div className="section">
              <h3 className="section-title">🎯 Your Itinerary</h3>
              <ul>
                {packageIncludes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {!packageName && tours && tours.length > 0 && (
            <div className="section">
              <h3 className="section-title">🎯 Your Activities</h3>
              <ul>
                {tours.map((tour, index) => (
                  <li key={index}>{tour}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Transport Information */}
          {transportNeeded && transportDetails && (
            <div className="section">
              <h3 className="section-title">🚗 Transport Details</h3>
              <div className="info-box">
                <p style={{ margin: 0 }}>{transportDetails}</p>
              </div>
            </div>
          )}

          {/* Food Preferences */}
          {(vegetarian || foodAllergies) && (
            <div className="section">
              <h3 className="section-title">🍽️ Food Preferences</h3>
              <div className="info-box">
                {vegetarian && <p style={{ margin: '5px 0' }}>✓ Vegetarian meals requested</p>}
                {foodAllergies && (
                  <p style={{ margin: '5px 0' }}>
                    <strong>Allergies/Restrictions:</strong> {foodAllergies}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Special Requests */}
          {specialRequests && (
            <div className="section">
              <h3 className="section-title">💬 Your Special Requests</h3>
              <div className="info-box">
                <p style={{ margin: 0 }}>{specialRequests}</p>
              </div>
            </div>
          )}

          {/* Arrival Instructions */}
          <div className="section">
            <h3 className="section-title">📍 Meeting Point & Arrival Instructions</h3>
            <p style={{ marginBottom: '15px' }}>
              <strong>Please read the important arrival information below:</strong>
            </p>

            <div className="arrival-step">
              <h4>1️⃣ Visitor Center</h4>
              <p style={{ margin: '5px 0' }}>
                <strong>GPS:</strong> 29.63926 N, 35.43429 E
                <br />
                <a href="https://www.google.com/maps?q=29.63926,35.43429" className="gps-link" target="_blank" rel="noopener noreferrer">
                  📍 Open in Google Maps
                </a>
              </p>
              <ul style={{ marginTop: '10px' }}>
                <li>Park your car in the designated lot on the left side of the main road</li>
                <li>Enter the Visitor Center and pay the entrance fee:
                  <ul style={{ marginLeft: '20px', marginTop: '5px' }}>
                    <li>7 JOD for foreigners</li>
                    <li>1 JOD for Jordanians and residents</li>
                    <li>Free for Jordan Pass holders</li>
                  </ul>
                </li>
                <li>Only pay official park rangers (in khaki uniforms)</li>
              </ul>
            </div>

            <div className="arrival-step">
              <h4>2️⃣ Continue to Rum Village (6 km)</h4>
              <p style={{ margin: '5px 0' }}>
                <strong>GPS:</strong> 29.57672 N, 35.42067 E
                <br />
                <a href="https://www.google.com/maps?q=29.57672,35.42067" className="gps-link" target="_blank" rel="noopener noreferrer">
                  📍 Open in Google Maps
                </a>
              </p>
              <ul style={{ marginTop: '10px' }}>
                <li>Drive into the reserve along the main road</li>
                <li>At Rum Village, take the first right to the Wadi Rum Rest House parking lot</li>
                <li>One of our representatives will meet you there and guide you to the camp</li>
                <li>Your car can stay safely in this parking area during your stay</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="section">
            <h3 className="section-title">📞 Need Help?</h3>
            <p style={{ marginBottom: '15px' }}>
              For delays or any assistance, please contact our manager <strong>Salem</strong>:
            </p>
            <div style={{ textAlign: 'center' }}>
              <a href="https://wa.me/962777424837" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
                💬 Chat on WhatsApp: +962 777 424 837
              </a>
            </div>
            <p style={{ textAlign: 'center', fontSize: '14px', color: '#6b7280', marginTop: '10px' }}>
              You can also call: <a href="tel:+962777424837" style={{ color: '#d97706' }}>+962 777 424 837</a>
            </p>
          </div>

          {/* Closing */}
          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #86efac' }}>
            <p style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
              We're excited to host you in the heart of the desert! ⭐
            </p>
            <p style={{ margin: 0, fontSize: '16px' }}>
              If you have any questions before arrival, don't hesitate to reach out.
            </p>
          </div>

          <p style={{ marginTop: '30px', fontSize: '16px' }}>
            Warm regards,<br />
            <strong>Zeid</strong><br />
            <span style={{ color: '#6b7280' }}>Mohammed Mutlak Camp - Wadi Rum</span>
          </p>
        </div>

        {/* Footer */}
        <div className="footer">
          <p style={{ margin: '0 0 10px 0' }}>
            <strong>Mohammed Mutlak Camp</strong>
          </p>
          <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
            Wadi Rum Protected Area, Jordan
          </p>
          <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
            📧 <a href="mailto:mohammed.mutlak.camp@gmail.com">mohammed.mutlak.camp@gmail.com</a>
          </p>
          <p style={{ margin: 0, fontSize: '14px' }}>
            📱 <a href="tel:+962777424937">+962 777 424 937</a>
          </p>
        </div>
      </div>
    </body>
  </html>
);
