import React from 'react';
import Cupcake from './cupcake'; 
import '../css/cupcakeHome.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCupcake } from "../redux/cupcakeSlice";
const cupcakes = [
  { id: 1, },
  { id: 2,  },
  { id: 3,  },
  { id: 4,  },
  { id: 6,  },
  { id: 7,  },
  { id: 8,  },
  { id: 9,  },
  { id: 10,  },
  { id: 11,  },
  { id: 12,  },
  { id: 13,  },
  { id: 14,  },
  { id: 15,  },
  { id: 16,  },
  { id: 17,  },
  { id: 18,  },
  { id: 19,  },
  { id: 20,  },
 
//   { id: 21, name: "Mocha Cupcake 1", description: "A delicious mocha cupcake made with premium espresso.", price: 40, image: "/images/mochaCupcake/mochaCupcake1.jpg" },
//   { id: 22, name: "Mocha Cupcake 2", description: "A bold and rich mocha-flavored cupcake.", price: 40, image: "/images/mochaCupcake/mochaCupcake2.jpg" },
//   { id: 23, name: "Mocha Cupcake 3", description: "A smooth and creamy mocha cupcake for coffee lovers.", price: 40, image: "/images/mochaCupcake/mochaCupcake3.jpg" }
];
 
 
const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleView = (cupcake) => {
    dispatch(selectCupcake(cupcake));
    navigate("/cupcake-details");
  };
 
  return (
<div className="main">
<h2>Featured Products</h2>
<div className="cupcake-list">
        {cupcakes.map(cupcake => (
<Cupcake
            key={cupcake.id}
            price={cupcake.price}
            onView={() => handleView(cupcake)}
          />
        ))}
</div>
</div>
  );
};
 
export default Main;