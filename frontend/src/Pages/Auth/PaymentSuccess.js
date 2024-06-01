import React, { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import ReactDOM from "react-dom/client";
import Container from "@mui/material/Container";
import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

//
// import { useEffect } from "react";
// import { useContext } from "react";
// import { useNavigate } from "react-router";
// import DataContext from "../../context/DataContext";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Set a timeout to navigate after 1 second
    const timer = setTimeout(() => {
      navigate("/onboarding/dns-setup");
    }, 2000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]); // Dependencies array includes navigate and to, so if they change the effect will re-run

  return (
    <div>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <CheckCircleIcon color="success" style={{ fontSize: 60 }} />
          <Typography variant="h4" color="success">
            Payment Successful!
          </Typography>
        </Box>
      </Container>
      {/* Embed the script here */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            <!-- Google -->

            gtag('event', 'conversion', {
              'send_to': 'AW-11300698155/-y-PCIDr4dUYEKvwy4wq',
              'transaction_id': ''
            });

          
            rdt('track', 'Purchase', {
            "currency": "USD",
            "itemCount": 1,
            "transactionId": "12345678",
            "value": 100,
            "products": [
            {
            "id": "product id 1",
            "name": "product name 1",
            "category": "product category 1"
            },
            // additional products can be added here
            ]
            });

            <script>
              rdt('track', 'Purchase', {
                  "transactionId": "12345678",
                  "value": 20
              });
            </script>
            <!-- Google -->


           <!-- Linkdin -->

            <script type="text/javascript">
            _linkedin_partner_id = "5454260";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            </script><script type="text/javascript">
            (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);
            </script>
            <noscript>
            <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=5454260&fmt=gif" />
            </noscript>

            <!-- Linkdin -->

            <!-- Reddit Pixel -->
            <script>
            !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','a2_dx3sgu62ojsp', {"optOut":false,"useDecimalCurrencyValues":true});rdt('track', 'PageVisit');
            </script>
            <!-- DO NOT MODIFY UNLESS TO REPLACE A USER IDENTIFIER -->
            <!-- End Reddit Pixel -->
          `,
        }}
      />
    </div>
  );
};

export default PaymentSuccess;
