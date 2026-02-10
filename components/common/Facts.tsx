import Image from "next/image";
import React from "react";

import factsData from "@/data/facts.json";
import Counter from "@/components/common/Counter";

export default function Facts() {
  return (
    <div className="mxd-section padding-grid-pre-mtext overflow-hidden">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-stats-cards">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {factsData.map((item, idx) => (
                  <div className={item.colClass} key={idx}>
                    {/* CARD */}
                    <div
                      className={item.cardClass}
                      style={{ position: "relative" }}
                    >
                      {/* CONTENT */}
                      <div>
                        {/* Avatars */}
                        {item.avatars && (
                          <div className="mxd-stats-cards__avatars">
                            <div className="mxd-avatars">
                              {item.avatars.map(
                                (avatar, aIdx) =>
                                  avatar.src && (
                                    <div
                                      className="mxd-avatars__item"
                                      key={aIdx}
                                    >
                                      <Image
                                        alt={avatar.alt || "Avatar"}
                                        src={avatar.src}
                                        width={avatar.width || 60}
                                        height={avatar.height || 60}
                                      />
                                    </div>
                                  )
                              )}
                            </div>
                          </div>
                        )}

                        {/* Counter */}
                        <div
                          className={
                            item.counterId.includes("2")
                              ? "mxd-counter align-end"
                              : "mxd-counter"
                          }
                        >
                          <p id={item.counterId} className={item.numberClass}>
                            <Counter
                              max={item.number}
                              parentClass={item.numberClass}
                            />
                            {item.suffix}
                          </p>

                          <p className={item.descrClass}>
                            {item.description.split("\n").map((line, i) => (
                              <React.Fragment key={i}>
                                {line}
                                {i !==
                                  item.description.split("\n").length - 1 && (
                                  <br />
                                )}
                              </React.Fragment>
                            ))}
                          </p>
                        </div>
                      </div>

                      {/* 🔥 GUARANTEED VISIBLE BUTTON */}
                      {item.button && (
                        <a
                          href={item.button.href}
                          style={{
                            position: "absolute",
                            bottom: "24px",
                            left: "24px",
                            zIndex: 9999,
                            padding: "14px 28px",
                            borderRadius: "999px",
                            backgroundColor: "#ffffff",
                            color: "#000000",
                            fontSize: "16px",
                            fontWeight: 600,
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            boxShadow:
                              "0 8px 20px rgba(0,0,0,0.15)",
                          }}
                        >
                          {item.button.text}
                          <i className={item.button.iconClass} />
                        </a>
                      )}

                      {/* IMAGE */}
                      <div className={item.imageClass}>
                        <Image
                          alt="Illustration"
                          src={item.image}
                          width={item.imageWidth}
                          height={item.imageHeight}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
