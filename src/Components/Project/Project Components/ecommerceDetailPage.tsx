import React from "react";
import ProjectDetailedView from "./ProjectDetailedView";

const EcommerceDetailPage = () => {
  const ecommerceProject = {
    title: "E-Commerce Platform",
    overview:
      "E-commerce platform built for a retail client requiring enterprise-grade reliability and scalability. The solution handles complete business operations including multi-vendor management, secure payment processing, and real-time inventory tracking, processing hundreds of transactions monthly with 100% order fulfillment accuracy.",
    features: [
      "Complete business workflow: Product listing → Cart → Checkout → Order tracking → Fulfillment",
      "Multi-tenant architecture supporting admins, sellers, and customers with role-based permissions",
      "Stripe payment integration with webhook validation ensuring zero transaction failures",
      "Real-time inventory management preventing overselling and stock discrepancies",
      "Automated media management (Cloudinary) with scheduled cleanup of orphaned assets",
      "Comprehensive admin dashboard for sales analytics, user management, and business insights",
      "Email notification system for order confirmations, shipping updates, and customer support",
      "Advanced search and filtering with product categorization and attribute-based browsing",
      "Secure authentication with JWT and session management protecting sensitive customer data",
      "Responsive design ensuring seamless shopping experience across all devices",
      "Type-safe database operations with Zod validation preventing data corruption",
      "Global error handling and logging for monitoring and rapid issue resolution",
    ],
    techStack: [
      "Next.js (Full-stack framework)",
      "Node.js & Express.js (Backend API)",
      "MongoDB with Mongoose (Database)",
      "TypeScript (Type safety)",
      "Stripe API (Payment processing)",
      "Cloudinary (Media management)",
      "Zod (Runtime validation)",
      "Tailwind CSS (Styling)",
      "JWT (Authentication)",
      "Resend (Email notifications)",
    ],
    challenges: [
      {
        title: "Payment Reconciliation at Scale",
        description:
          "Designing a fault-tolerant payment system that guaranteed 100% order fulfillment accuracy, handling edge cases including refunds, disputes, and network failures while maintaining perfect transaction records for client accounting.",
      },
      {
        title: "Historical Data Preservation for Auditing",
        description:
          "Creating database schemas that preserved historical pricing and order details for financial auditing and compliance, ensuring accurate records even after product updates and price changes.",
      },
      {
        title: "Production-Grade Media Management",
        description:
          "Building automated systems to prevent cloud storage cost overruns by eliminating orphaned uploads and implementing lifecycle management for product images across updates and deletions.",
      },
      {
        title: "Enterprise Error Handling",
        description:
          "Developing comprehensive monitoring and error recovery systems that maintained platform uptime during third-party service outages and provided actionable alerts for the client's operations team.",
      },
    ],
    learnings: [
      "Client requirements often prioritize reliability and compliance over feature velocity - building audit trails and validation is non-negotiable",
      "Production payment systems require redundant validation (client-side, server-side, webhook) to prevent revenue loss and customer disputes",
      "Enterprise applications demand proactive monitoring - errors should be caught, logged, and resolved before affecting end users",
      "Third-party service integration requires robust fallback strategies and regular health checks to maintain system reliability",
      "Database design for business applications must balance performance with historical accuracy for financial and legal compliance",
      "Clear documentation and handover processes are critical for client success, especially for ongoing maintenance",
      "Security in multi-tenant systems requires careful planning at every layer - authentication, authorization, and data access",
      "Automated testing and deployment pipelines are essential for maintaining client confidence in production updates",
    ],
    linksLine: true
  };

  return <ProjectDetailedView project={ecommerceProject} />;
};

export default EcommerceDetailPage;