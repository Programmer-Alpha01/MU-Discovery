// all-buildings-data.js
// Enhanced version – March 2026 – more detailed floor information

export const campusData = {
  mc: [
    {
      name: "Block A (Main Academic Tower)",
      floors: 13,
      densities: [1, 0, 3, 3, 10, 9, 10, 2, 1, 3, 1, 4, 0, 0],
      disabledFloors: [1, 13],
      disabledReasons: {
        1: "Bank of China lecture theatre + branch office (public & staff only)",
        13: "MU Club – Members only + event space (closed to general students)"
      },
      floorNames: ["-1F", "GF", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F"],
      floorDetails: {
        0:  "Basement parking (staff & visitor), building services. No student seating.",
        2:  "Large lecture theatres + student common lounge with sofas, bean bags, coffee vending machines. Very popular rest & group hangout spot.",
        3:  "Medium lecture rooms + small group discussion tables near the printing room. Moderate use.",
        4:  "Library extension – group study rooms (bookable), open reading tables, individual carrels, power sockets everywhere.",
        5:  "Classrooms & seminar rooms. Few benches in corridors only ★☆☆☆☆",
        6:  "Design studios + creative corner with high tables & stools for casual discussion.",
        7:  "Staff offices – School of Business. Almost no public seating ★☆☆☆☆",
        8:  "General teaching floors – corridor study pods (4–6 person tables with partitions) near elevators.",
        9:  "Computer labs + innovation lounge – comfortable sofas + coffee tables near makerspace entrance.",
        10: "Postgraduate quiet zone – individual desks with high partitions, soft seating area at the back.",
        11: "Academic staff offices + few benches in waiting areas.",
        12: "Staff lounge + student-accessible wellness corner (sofas, low tables, plants) near prayer room."
      }
    },
    {
      name: "Block B (Teaching & Studio Wing)",
      floors: 9,
      densities: [2, 2, 2, 8, 9, 10, 2, 2, 1],
      disabledFloors: [],
      disabledReasons: {},
      floorNames: ["-1F", "GF", "1F", "2F", "3F", "4F", "5F", "6F", "7F"],
      floorDetails: {
        0:  "Underground storage & maintenance. No student access.",
        1:  "Main entrance lobby + student activity counter area with high tables and bar stools.",
        2:  "Black box theatre + rehearsal waiting area – benches & folding chairs.",
        3:  "Art & design studios + open critique tables in central area.",
        4:  "Main open-plan design studio – many large tables, high stools, casual seating clusters. Very popular working spot.",
        5:  "Digital media labs + small breakout tables near windows.",
        6:  "Photography studio + rest corner with sofa & coffee table.",
        7:  "Exhibition gallery + critique rooms – benches along walls + group table in middle.",
        8:  "Rooftop garden access (limited) + few outdoor benches."
      }
    },
    {
      name: "Block C (Multi-purpose & Event Building)",
      floors: 14,
      densities: [1, 3, 2, 1, 4, 8, 9, 1, 1, 1, 2, 2, 1, 0, 1],
      disabledFloors: [0, 12, 13],
      disabledReasons: {
        0:  "Loading bay & car park (service vehicles & VIP only)",
        12: "Multi-purpose hall A (booked for conferences / exams)",
        13: "Multi-purpose hall B + rooftop mechanical area (staff only)"
      },
      floorNames: ["-1F", "GF", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "Rooftop"],
      floorDetails: {
        1:  "Main atrium + café seating area (indoor & semi-outdoor tables).",
        2:  "Student union offices + large common room with sofas, bean bags, group tables.",
        3:  "Lecture halls + corridor benches near elevators.",
        5:  "Flexible event space + movable high tables & stools when not booked.",
        6:  "Fitness & dance studios + small rest area with benches.",
        8:  "Multi-faith prayer rooms + wellness lounge (soft seating, low tables).",
        11: "Observation deck & small rooftop garden – outdoor benches & picnic tables (weather dependent)."
      }
    }
  ],

  jcc: [
    {
      name: "Block D (Jockey Club Complex – Academic & Admin)",
      floors: 12,
      densities: [3, 6, 5, 4, 10, 3, 4, 5, 6, 4, 3, 2, 1],
      disabledFloors: [0],
      disabledReasons: {
        0: "Main entrance lobby & security control (transient only)"
      },
      floorNames: ["GF", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "Rooftop"],
      floorDetails: {
        1:  "Student service centre + waiting area with chairs & small tables.",
        2:  "Classrooms + corridor study benches near staircases.",
        4:  "Main auditorium + foyer lounge with sofas & coffee tables.",
        8:  "Quiet study zone – individual carrels + soft seating pods.",
        9:  "Group study rooms area + open collaborative tables outside rooms.",
        10: "Student activity lounge – sofas, bean bags, low tables, board games corner.",
        11: "Rooftop terrace – benches & outdoor tables."
      }
    },
    {
      name: "Block E (Jockey Club Complex – Professional & Specialist)",
      floors: 12,
      densities: [2, 7, 4, 5, 9, 6, 4, 3, 5, 7, 4, 2, 1],
      disabledFloors: [0],
      disabledReasons: {
        0: "Entrance foyer & security checkpoint"
      },
      floorNames: ["GF", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "Rooftop"],
      floorDetails: {
        1:  "Admission office + waiting lounge with chairs.",
        2:  "Career services + small discussion tables.",
        5:  "Specialist labs + few corridor benches",
        8:  "Clinical simulation area + student rest corner near entrance ",
        10: "Postgraduate common room – comfortable sofas, group tables, kitchenette",
        11: "Rooftop herb garden – few benches"
      }
    }
  ],

  ioh: [
    {
      name: "IOH Main Building (Institute of Health)",
      floors: 13,
      densities: [2, 8, 10, 10, 10, 9, 10, 9, 4, 8, 7, 6, 3, 1],
      disabledFloors: [0, 8, 12, 13],
      disabledReasons: {
        0:  "Main entrance & security reception (transient)",
        8:  "Ward simulation & clinical skills training (class use only)",
        12: "Nursing & Health Studies administrative offices (staff only)",
        13: "Mechanical & plant room (restricted access)"
      },
      floorNames: ["GF", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "Rooftop"],
      floorDetails: {
        1:  "Main lobby + student common area – sofas, vending machines, high tables",
        2:  "Fundamental nursing labs + corridor benches ★★☆☆☆",
        4:  "High-fidelity simulation ward + small rest area with chairs",
        9:  "Physiotherapy labs + group discussion tables near windows",
        10: "Occupational therapy area + comfortable seating cluster",
        11: "Research student zone – individual desks + soft seating lounge",
        12: "Rooftop staff area + limited student-accessible benches"
      }
    }
  ]
};

// Optional named exports (unchanged)
export const mcData   = campusData.mc;
export const jccData  = campusData.jcc;
export const iohData  = campusData.ioh;

export function getAllBuildings() {
  return [
    { key: "mc",  name: "MC Building",  blocks: mcData,   color: "#1e88e5" },
    { key: "jcc", name: "JCC Building", blocks: jccData,  color: "#e53935" },
    { key: "ioh", name: "IOH Building", blocks: iohData,  color: "#43a047" }
  ];
}