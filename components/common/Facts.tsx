import Link from "next/link";
import Image from "next/image";
import React from "react";

import factsData from "@/data/facts.json";
import Counter from "@/components/common/Counter";
import AnimatedButton from "../animation/AnimatedButton";

export default function Facts() {
  return (
    <div className="mxd-section padding-grid-pre-mtext overflow-hidden">
      <div className="mxd-container grid-container">
        {/* Block - Statistics Cards Start */}
        <div className="mxd-block">
          <div className="mxd-stats-cards">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {factsData.map((item, idx) => (
                  <div className={item.colClass} key={idx}>
                    <div className={item.cardClass}>
                      {item.avatars ? (
                        <div className="mxd-stats-cards__btngroup">
                          <div className="mxd-avatars">
                            {item.avatars.map((avatar, aIdx) => (
                              avatar.src ? (
                                <div className="mxd-avatars__item" key={aIdx}>
                                  <Image
                                    alt={avatar.alt || "Avatar"}
                                    src={avatar.src}
                                    width={avatar.width || 60}
                                    height={avatar.height || 60}
                                  />
                                </div>
                              ) : null
                            ))}
                          </div>
                        </div>
                      ) : null}
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
                      {item.button ? (

                        <div className="mxd-stats-cards__btngroup">
                          <AnimatedButton
                            text={item.button.text}
                            className={item.button.btnClass}
                            href={item.button.href}
                          >
                            <i className={item.button.iconClass} />
                          </AnimatedButton>
                        </div>
                      ) : null}
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
        {/* Block - Statistics Cards End */}
      </div>
    </div>
  );
}
