import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPagev2 from "../src/Pages/LandingPagev2";
import LoadingPagev1 from "../src/Pages/LoadingPagev1";
import PricingPagev2 from "../src/Pages/PricingPagev2";
import Blogpagev3_Programatic_Seo from "../src/Pages/Blogpagev3_Programatic_Seo";
import Why_is_my_mailchimp_email_going_to_spam from "../src/Pages/Blogs/Why_is_my_mailchimp_email_going_to_spam";
import DataState from "ContextAPI/DataContext";
import Dashboardv2 from "../src/Pages/Dashboardv2";
import EmailSpamChecker from "../src/Pages/EmailSpamChecker";
import DashboardView from "Pages/Dashboardv2/DashboardPage";

import Login from "Pages/Login";
// import AppPassword from "drawers/AppPassword";
import AppPassword from "drawers/AppPassword";
import AppPasswordv2 from "drawers/AppPasswordv2";
import GoogleSignup_API from "Pages/Auth/GoogleSignup_API";
import GoogleAccountAccess from "Pages/Auth/GoogleAccountAccess";
import EmailConnectStatusPage from "Pages/Auth/EmailConnectStatusPage";

const ExtensionLandingPage = React.lazy(() =>
  import("../src/Pages/ExtensionLandingPage")
);
const HomeProcessing = React.lazy(() => import("../src/Pages/HomeProcessing"));
const ProjectRoutes = () => {
  return (
    <DataState>
      <React.Suspense fallback={<>Loading...</>}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPagev2 />} />
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route path="/login" element={<Login />} />

            <Route path="/test" element={<AppPassword />} />
            <Route path="/test2" element={<AppPasswordv2 />} />

            <Route path="/email-warmup" element={<LoadingPagev1 />} />
            <Route
              path="/automated-email-warm-up"
              element={<PricingPagev2 />}
            />

            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/dashboard" element={<DashboardView />} />
            <Route
              path="/check-email-for-spam-triggers"
              element={<EmailSpamChecker />}
            />
            {/* <Route path="/blog" element={<Blogpagev3 />} /> */}
            <Route
              path="/link1"
              element={<Why_is_my_mailchimp_email_going_to_spam />}
            />
            {/* <Route path="*" element={<Blogpagev3_Programatic_Seo />} /> */}
            {/* <Route
              path="/why-is-my-mailchimp-email-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/do-hubspot-emails-go-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/how-to-know-if-my-emails-are-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/how-to-make-an-email-not-go-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/klaviyo-emails-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            /> */}
            <Route
              path="/sendgrid-emails-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            {/* <Route path="/google-signup" element={<GoogleSignup_API />} />
            <Route path="/google-access" element={<GoogleAccountAccess />} /> */}
            <Route path="/email-onboard" element={<EmailConnectStatusPage />} />
            {/* <Route
              path="/how-to-check-if-your-emails-are-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/google-workspace-emails-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/gmail-emails-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/marketing-emails-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/company-emails-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/why-does-my-email-go-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/why-emails-go-to-spam-instead-of-inbox"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/salesforce-emails-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/squarespace-emails-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/why-are-my-emails-going-to-junk-on-iphone"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/how-many-emails-can-you-send-before-considered-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/how-to-get-emails-to-stop-going-to-junk"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/how-to-know-if-your-email-went-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/how-to-stop-email-from-going-to-junk-outlook"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/aol-email-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/wordpress-emails-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/domain-emails-going-to-spam"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/emails-going-to-spam-365"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/why-are-my-hotmail-emails-going-to-junk"
              element={<Blogpagev3_Programatic_Seo />}
            />
            <Route
              path="/check-email-for-spam-triggers"
              element={<Blogpagev3_Programatic_Seo />}
            /> */}
          </Routes>
        </Router>
      </React.Suspense>
    </DataState>
  );
};
export default ProjectRoutes;
