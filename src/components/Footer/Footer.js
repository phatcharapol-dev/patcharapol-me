import React from "react";

const profileImg = `${process.env.PUBLIC_URL}/profile_img_2.png`;

function Footer() {
  return (
    <div className="footer">
      <div className="container h-full">
        <div className="flex flex-row justify-center items-center h-full">
          <div className="h-10 w-10 bg-blue-light dark:bg-blue-main rounded-full">
            <img src={profileImg} alt={"profile-img"} />
          </div>
          <div className="ml-4">
            <p>
              Created by{" "}
              <a
                className="font-bold"
                href="https://www.facebook.com/phatcharapol.nut"
              >
                @Patcharaphol
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
