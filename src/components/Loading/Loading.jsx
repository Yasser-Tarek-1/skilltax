import { createPortal } from "react-dom";

const Loading = () => {
  return (
    <div>
      {createPortal(
        <>
          <div
            onClick={close}
            className={
              "w-full h-full fixed inset-0 bg-black opacity-90 z-[9998]"
            }
          ></div>
          <div
            className={
              "fixed flex items-center justify-center w-full px-4 z-[9999] left-[50%] overflow-hidden top-[50%] translate-y-[-50%] translate-x-[-50%]"
            }
          >
            <svg
              id="logo-loading"
              width="466"
              height="102"
              viewBox="0 0 466 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M415.099 28.2815L414.375 27.0455H412.942H401.351H396.801L399.241 30.8862L419.185 62.2727L399.241 93.6592L396.801 97.5H401.351H412.942H414.337L415.069 96.3134L428.624 74.3608L442.178 96.3134L442.911 97.5H444.306H455.897H460.487L457.997 93.6437L437.736 62.2727L457.997 30.9018L460.487 27.0455H455.897H444.306H442.873L442.149 28.2815L428.624 51.362L415.099 28.2815Z"
                stroke="#373873"
                strokeWidth="5"
              />
              <path
                d="M336.329 96.4524L336.337 96.4561L336.345 96.4597C340.09 98.1906 344.218 99.0341 348.686 99.0341C352.728 99.0341 356.31 98.4326 359.347 97.1261C362.029 95.9727 364.314 94.5463 366.129 92.8064V95V97.5H368.629H378.686H381.186V95V51.875C381.186 46.439 380.301 41.8256 378.32 38.2262C376.439 34.8103 374.005 32.138 370.976 30.339C368.18 28.662 365.242 27.5403 362.172 27.0004C359.344 26.4707 356.775 26.1932 354.482 26.1932C350.956 26.1932 347.39 26.6794 343.788 27.6394C340.065 28.6101 336.636 30.3304 333.511 32.7741C330.277 35.2967 327.771 38.7626 325.934 43.0493L324.886 45.4939L327.391 46.3884L336.936 49.7975L339.084 50.5646L340.045 48.4959C340.939 46.5686 342.552 44.6205 345.056 42.6902C347.203 41.0356 350.36 40.0568 354.823 40.0568C359.068 40.0568 361.755 41.123 363.388 42.7969L363.394 42.8025L363.399 42.808C365.117 44.547 366.129 47.1102 366.129 50.8523V51.1932C366.129 52.1356 365.855 52.3119 365.659 52.4219L365.648 52.4284L365.636 52.435C364.959 52.8243 363.566 53.2486 361.158 53.5231C358.659 53.7818 355.416 54.1677 351.436 54.6795L351.43 54.6802C348.316 55.0876 345.217 55.6404 342.134 56.3382C338.946 57.0373 335.999 58.1077 333.308 59.5618C330.462 61.0993 328.166 63.2428 326.458 65.9679C324.653 68.8165 323.857 72.3641 323.857 76.4204C323.857 81.0814 324.949 85.2177 327.253 88.7072L327.253 88.7072L327.26 88.7163C329.512 92.0944 332.555 94.6762 336.329 96.4524ZM359.044 82.9815L359.034 82.987C356.773 84.2825 353.875 85 350.22 85C346.586 85 343.802 84.2046 341.702 82.7937C339.882 81.5288 338.913 79.706 338.913 76.9318C338.913 74.8268 339.465 73.4771 340.295 72.5771C341.358 71.4281 342.792 70.5151 344.695 69.8889L344.704 69.8859L344.713 69.8829C346.817 69.1729 349.099 68.6531 351.566 68.3313L351.569 68.3309C352.629 68.1914 354.02 68.0227 355.747 67.8246L355.764 67.8226L355.782 67.8204C357.564 67.5904 359.388 67.3318 361.254 67.0448L361.269 67.0424L361.285 67.0398C363.073 66.7418 364.691 66.4016 366.129 66.0151V71.3068C366.129 73.5768 365.544 75.749 364.331 77.8594L364.326 77.8688L364.32 77.8783C363.177 79.9089 361.452 81.6163 359.044 82.9815Z"
                stroke="#373873"
                strokeWidth="5"
              />
              <path
                d="M308.397 29.5454V27.0454H305.897H294.42V13.8636V11.3636H291.92H281.863H279.363V13.8636V27.0454H271.977H269.477V29.5454V38.0682V40.5682H271.977H279.363V78.9773C279.363 83.1723 280.337 86.8626 282.461 89.8774L282.467 89.8851L282.472 89.8928C284.508 92.7361 287.092 94.8876 290.207 96.2975L290.216 96.3015C293.248 97.6594 296.379 98.3523 299.59 98.3523C301.559 98.3523 303.305 98.2059 304.773 97.8676C306.034 97.603 307.118 97.3185 307.968 96.9999L310.01 96.2341L309.528 94.107L307.483 85.0729L306.945 82.6955L304.554 83.1735L302.901 83.5042C302.374 83.585 301.623 83.6364 300.613 83.6364C299.409 83.6364 298.287 83.4539 297.233 83.0992C296.556 82.8419 295.903 82.3318 295.304 81.3637C294.815 80.504 294.42 78.9061 294.42 76.25V40.5682H305.897H308.397V38.0682V29.5454Z"
                stroke="#373873"
                strokeWidth="5"
              />
              <path
                d="M253.111 7.72726V5.22726H250.611H240.555H238.055V7.72726V95V97.5H240.555H250.611H253.111V95V7.72726Z"
                stroke="#373873"
                strokeWidth="5"
              />
              <path
                d="M216.235 7.72726V5.22726H213.735H203.678H201.178V7.72726V95V97.5H203.678H213.735H216.235V95V7.72726Z"
                stroke="#373873"
                strokeWidth="5"
              />
              <path
                d="M164.301 95V97.5H166.801H176.858H179.358V95V29.5455V27.0455H176.858H166.801H164.301V29.5455V95ZM165.113 18.4377L165.123 18.4465L165.132 18.4551C167.019 20.2288 169.322 21.1364 171.915 21.1364C174.504 21.1364 176.801 20.2304 178.665 18.4464C180.56 16.6612 181.574 14.4092 181.574 11.8182C181.574 9.22721 180.56 6.97513 178.665 5.18994C176.801 3.40594 174.504 2.5 171.915 2.5C169.322 2.5 167.019 3.40757 165.132 5.18127L165.123 5.18991L165.113 5.19864C163.246 6.99008 162.256 9.24033 162.256 11.8182C162.256 14.396 163.246 16.6463 165.113 18.4377Z"
                stroke="#373873"
                strokeWidth="5"
              />
              <path
                d="M105.685 95V71.5965L109.943 67.6516L132.757 96.5491L133.507 97.5H134.719H147.503H152.673L149.463 93.4476L121.137 57.6927L147.235 31.3034L151.446 27.0454H145.458H133.014H131.966L131.231 27.7934L105.685 53.7958V7.72726V5.22726H103.185H93.128H90.628V7.72726V95V97.5H93.128H103.185H105.685V95Z"
                stroke="#373873"
                strokeWidth="5"
              />
              <path
                d="M54.8128 29.8395L55.074 32.0455H57.2955H67.5227H70.1047L70.0214 29.4648C69.8633 24.5632 68.3341 20.1347 65.4398 16.2522C62.6033 12.4091 58.7868 9.42945 54.0746 7.28649C49.3224 5.09675 43.9578 4.03409 38.0341 4.03409C32.1554 4.03409 26.7562 5.11514 21.8783 7.32337C17.0294 9.50289 13.0945 12.6079 10.1471 16.6527L10.1451 16.6555C7.16536 20.7566 5.70455 25.5433 5.70455 30.9091C5.70455 37.4201 7.9377 42.8735 12.4835 47.0297L14.0845 45.2787L12.4835 47.0297C16.8208 50.9952 22.5966 53.9478 29.6729 55.9822L29.6768 55.9834L40.4155 59.0515L40.4243 59.0541L40.4332 59.0565C43.4041 59.8818 46.1517 60.8399 48.6798 61.9273C51.0463 62.9451 52.8568 64.2252 54.1927 65.7252C55.3293 67.0014 55.9886 68.7288 55.9886 71.1364C55.9886 73.7846 55.2231 76.0163 53.7147 77.9385C52.1431 79.9128 49.9704 81.5199 47.0973 82.7163C44.2332 83.8808 40.9413 84.4886 37.1818 84.4886C33.9701 84.4886 31.0098 84.0161 28.2833 83.0919C25.6621 82.1661 23.5566 80.7952 21.9028 79.0021C20.3887 77.304 19.4619 75.1142 19.218 72.2853L19.021 70H16.7273H5.81818H3.13324L3.32454 72.6781C3.69567 77.874 5.30014 82.5147 8.17519 86.5272L8.18279 86.5377C11.0843 90.543 15.0313 93.619 19.932 95.7936L19.9373 95.796C24.8979 97.9836 30.6687 99.0341 37.1818 99.0341C44.1543 99.0341 50.2399 97.8683 55.3468 95.4238C60.414 93.0118 64.3775 89.7002 67.1089 85.4468C69.8519 81.2197 71.2159 76.4838 71.2159 71.3068C71.2159 66.8767 70.3071 62.9571 68.3493 59.6719C66.5004 56.5696 64.1315 54.0024 61.2457 52.0018C58.5248 50.0686 55.6541 48.5328 52.6353 47.4042C49.7945 46.3317 47.1852 45.4798 44.8127 44.8566C44.8102 44.856 44.8077 44.8553 44.8052 44.8546L35.9568 42.4723L35.9499 42.4705L35.9431 42.4687C34.4067 42.0644 32.7026 41.5338 30.8277 40.8724C29.0612 40.2219 27.3724 39.4035 25.7594 38.416C24.2867 37.4875 23.0977 36.3524 22.1662 35.0078C21.3777 33.806 20.9318 32.3066 20.9318 30.3977C20.9318 28.1291 21.5674 26.1642 22.8338 24.4193C24.1544 22.6387 26.0228 21.1775 28.5455 20.0778C31.0679 18.9905 34.0976 18.4091 37.6932 18.4091C42.5956 18.4091 46.5535 19.5124 49.7022 21.5788C52.7213 23.56 54.3883 26.2549 54.8128 29.8395Z"
                stroke="#373873"
                strokeWidth="5"
              />
            </svg>
          </div>
        </>,
        document.getElementById("loading")
      )}
    </div>
  );
};

export default Loading;