import * as React from 'react';

interface AdminNotificationEmailProps {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  arrivalDate: string;
  numPeople: number;
  accommodation?: string;
  tours: string[];
  packageName?: string;
  packageDuration?: string;
  packageIncludes?: string[];
  totalPrice: number;
  discountAmount: number;
  finalPrice: number;
  transportNeeded?: boolean;
  transportDetails?: string;
  vegetarian?: boolean;
  foodAllergies?: string;
  specialRequests?: string;
}

export const AdminNotificationEmail = ({
  customerName,
  customerEmail,
  customerPhone,
  arrivalDate,
  numPeople,
  accommodation,
  tours,
  packageName,
  packageDuration,
  packageIncludes,
  totalPrice,
  discountAmount,
  finalPrice,
  transportNeeded,
  transportDetails,
  vegetarian,
  foodAllergies,
  specialRequests,
}: AdminNotificationEmailProps) => (
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
            max-width: 700px;
            margin: 0 auto;
            background-color: #ffffff;
          }
          .header {
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            color: white;
            padding: 40px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
          }
          .urgent-badge {
            background-color: #ef4444;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            display: inline-block;
            font-size: 14px;
            font-weight: bold;
            margin-top: 10px;
          }
          .content {
            padding: 30px 20px;
          }
          .section {
            margin-bottom: 25px;
            background-color: #f9fafb;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #059669;
          }
          .section-title {
            color: #047857;
            font-size: 18px;
            font-weight: bold;
            margin: 0 0 15px 0;
            display: flex;
            align-items: center;
          }
          .customer-info {
            background-color: #dbeafe;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
          }
          .info-row {
            display: flex;
            justify-content: space-between;
            margin: 8px 0;
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: bold;
            color: #4b5563;
          }
          .value {
            color: #1f2937;
          }
          .price-summary {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .price-row {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            font-size: 16px;
          }
          .total-price {
            font-size: 24px;
            font-weight: bold;
            color: #d97706;
            border-top: 2px solid #f59e0b;
            padding-top: 15px;
            margin-top: 15px;
          }
          .discount-badge {
            background-color: #10b981;
            color: white;
            padding: 3px 10px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: bold;
          }
          .warning-box {
            background-color: #fef2f2;
            border-left: 4px solid #ef4444;
            padding: 15px;
            margin: 15px 0;
            border-radius: 4px;
          }
          .success-box {
            background-color: #f0fdf4;
            border-left: 4px solid #10b981;
            padding: 15px;
            margin: 15px 0;
            border-radius: 4px;
          }
          ul {
            list-style-type: none;
            padding-left: 0;
            margin: 10px 0;
          }
          ul li {
            padding: 5px 0;
            padding-left: 25px;
            position: relative;
          }
          ul li:before {
            content: "✓";
            color: #10b981;
            font-weight: bold;
            font-size: 16px;
            position: absolute;
            left: 0;
          }
          .action-buttons {
            text-align: center;
            margin: 30px 0;
          }
          .button {
            display: inline-block;
            padding: 15px 30px;
            margin: 10px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            font-size: 16px;
          }
          .whatsapp-button {
            background-color: #25D366;
            color: white;
          }
          .email-button {
            background-color: #3b82f6;
            color: white;
          }
          .phone-button {
            background-color: #8b5cf6;
            color: white;
          }
          .footer {
            background-color: #1f2937;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 14px;
          }
        `}
      </style>
    </head>
    <body>
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>🎉 New Booking Request!</h1>
          <div className="urgent-badge">ACTION REQUIRED</div>
        </div>

        {/* Content */}
        <div className="content">
          {/* Customer Contact Information */}
          <div className="section">
            <h3 className="section-title">👤 Customer Contact Information</h3>
            <div className="customer-info">
              <div className="info-row">
                <span className="label">Name:</span>
                <span className="value"><strong>{customerName}</strong></span>
              </div>
              <div className="info-row">
                <span className="label">Email:</span>
                <span className="value">{customerEmail}</span>
              </div>
              <div className="info-row">
                <span className="label">Phone:</span>
                <span className="value">{customerPhone}</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="action-buttons">
              <a href={`https://wa.me/${customerPhone.replace(/[^0-9]/g, '')}`} className="button whatsapp-button" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
              </a>
              <a href={`mailto:${customerEmail}`} className="button email-button">
                📧 Email
              </a>
              <a href={`tel:${customerPhone}`} className="button phone-button">
                📞 Call
              </a>
            </div>
          </div>

          {/* Booking Details */}
          <div className="section">
            <h3 className="section-title">📅 Booking Details</h3>
            <div className="info-row">
              <span className="label">Arrival Date:</span>
              <span className="value"><strong>{arrivalDate}</strong></span>
            </div>
            <div className="info-row">
              <span className="label">Number of People:</span>
              <span className="value"><strong>{numPeople} {numPeople === 1 ? 'person' : 'people'}</strong></span>
            </div>

            {packageName ? (
              <>
                <div className="info-row">
                  <span className="label">Package:</span>
                  <span className="value"><strong>{packageName}</strong></span>
                </div>
                {packageDuration && (
                  <div className="info-row">
                    <span className="label">Duration:</span>
                    <span className="value">{packageDuration}</span>
                  </div>
                )}
                {packageIncludes && packageIncludes.length > 0 && (
                  <div style={{ marginTop: '15px' }}>
                    <span className="label">Package Includes:</span>
                    <ul>
                      {packageIncludes.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <>
                {accommodation && (
                  <div className="info-row">
                    <span className="label">Accommodation:</span>
                    <span className="value">{accommodation}</span>
                  </div>
                )}
                {tours && tours.length > 0 && (
                  <div style={{ marginTop: '15px' }}>
                    <span className="label">Selected Tours:</span>
                    <ul>
                      {tours.map((tour, index) => (
                        <li key={index}>{tour}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Price Summary */}
          <div className="section">
            <h3 className="section-title">💰 Price Summary</h3>
            <div className="price-summary">
              <div className="price-row">
                <span>Subtotal:</span>
                <span>{totalPrice.toFixed(2)} JOD</span>
              </div>
              {discountAmount > 0 && (
                <div className="price-row" style={{ color: '#10b981' }}>
                  <span>
                    Discount Applied <span className="discount-badge">-15%</span>
                  </span>
                  <span>-{discountAmount.toFixed(2)} JOD</span>
                </div>
              )}
              <div className="price-row total-price">
                <span>Final Total:</span>
                <span>{finalPrice.toFixed(2)} JOD</span>
              </div>
            </div>
          </div>

          {/* Transport Information */}
          {transportNeeded && transportDetails && (
            <div className="section">
              <h3 className="section-title">🚗 Transport Request</h3>
              <div className="warning-box">
                <p style={{ margin: 0, fontWeight: 'bold', color: '#dc2626' }}>
                  ⚠️ Customer needs transport service
                </p>
                <p style={{ margin: '10px 0 0 0' }}>
                  {transportDetails}
                </p>
              </div>
            </div>
          )}

          {/* Food Preferences */}
          {(vegetarian || foodAllergies) && (
            <div className="section">
              <h3 className="section-title">🍽️ Food Preferences & Allergies</h3>
              <div className="warning-box">
                {vegetarian && (
                  <p style={{ margin: '5px 0' }}>
                    <strong>🥗 Vegetarian meals required</strong>
                  </p>
                )}
                {foodAllergies && (
                  <p style={{ margin: '5px 0' }}>
                    <strong>⚠️ Allergies/Restrictions:</strong> {foodAllergies}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Special Requests */}
          {specialRequests && (
            <div className="section">
              <h3 className="section-title">💬 Special Requests</h3>
              <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px' }}>
                <p style={{ margin: 0 }}>{specialRequests}</p>
              </div>
            </div>
          )}

          {/* Confirmation Sent Notice */}
          <div className="success-box">
            <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', color: '#047857' }}>
              ✅ Confirmation Email Sent to Customer
            </p>
            <p style={{ margin: 0, fontSize: '14px', color: '#065f46' }}>
              The customer has received a detailed confirmation email with arrival instructions, GPS coordinates, and your contact information.
            </p>
          </div>

          {/* Next Steps */}
          <div className="section">
            <h3 className="section-title">📝 Next Steps</h3>
            <ol style={{ paddingLeft: '20px', margin: '10px 0' }}>
              <li style={{ marginBottom: '10px' }}>Contact the customer to confirm the booking details</li>
              <li style={{ marginBottom: '10px' }}>Arrange transportation if requested</li>
              <li style={{ marginBottom: '10px' }}>Prepare accommodation and meals (note dietary requirements)</li>
              <li style={{ marginBottom: '10px' }}>Send final confirmation with any additional details</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p style={{ margin: 0 }}>
            This is an automated notification from your Wadi Rum booking system
          </p>
        </div>
      </div>
    </body>
  </html>
);
