import Image from "next/legacy/image";
import delivery from "../../../assets/img/facilities/free-delivery.png";
import payment from "../../../assets/img/facilities/secure-payment.png";
import moneyBack from "../../../assets/img/facilities/money-back.png";

const FacilitiesCard = () => {
  return (
    <div style={{ marginTop: "22px" }}>
      <div
        style={{
          backgroundColor: "#F1EFE7",
          height: "135px",
          width: "100%",
          marginBottom: "5px",
        }}
      >
        <div
          style={{
            height: "90px",
            width: "90px",
            margin: "0px  auto",
          }}
        >
          <Image
            alt="ankur-farm"
            src={delivery}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <p style={{ textAlign: "center", color: "#88B51A" }}>
          <strong>Ankur Offers free delivery to every customers</strong>
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#F1EFE7",
          height: "135px",
          width: "100%",
          marginBottom: "5px",
        }}
      >
        <div
          style={{
            height: "90px",
            width: "90px",
            margin: "0px  auto",
          }}
        >
          <Image
            alt="ankur-farm"
            src={payment}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <p style={{ textAlign: "center", color: "#88B51A" }}>
          <strong>Your payment is fully secured</strong>
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#F1EFE7",
          height: "135px",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "90px",
            width: "90px",
            margin: "0px  auto",
          }}
        >
          <Image
            alt="ankur-farm"
            src={moneyBack}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <p style={{ textAlign: "center", color: "#88B51A" }}>
          <strong>Money Back Guarantee</strong>
        </p>
      </div>
    </div>
  );
};

export default FacilitiesCard;
