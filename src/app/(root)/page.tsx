import HeaderBox from "@/components/header-box";
import TotalBalanceBox from "@/components/total-balance-box";
import React from "react";

const Home = () => {
  const isLoggedin = { firstName: "Park Avan" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={isLoggedin?.firstName}
            subtext={
              "Access and manage your account and transactions efficiently"
            }
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
