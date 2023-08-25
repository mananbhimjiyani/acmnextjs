// Aboutus.js

import React from "react";

export default function Aboutus() {
    return (
        <div className="bg-gradient2 flex flex-col items-center justify-center h-full py-10 px-24">
            <h1 className="flex items-center justify-center text-4xl md:text-5xl lg:text-6xl text-white font-sub-heading py-10">
                About Us
            </h1>
            <div className="h-full bg-gradient rounded-2xl p-10 m-2 text-center">
                <p className="text-gray-200 mt-2"> {/* Reduced mt-4 to mt-2 */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam eget pretium nunc, a vehicula neque. Fusce eget
                    odio massa. Vivamus consequat, arcu vel efficitur auctor,
                    ex ex euismod elit.
                </p>

                <p className="text-gray-200 mt-4">
                    Mauris eu libero nec justo facilisis tincidunt.
                    Suspendisse vel tortor facilisis, aliquet lorem eu,
                    vehicula nisi. Vivamus ut fringilla nunc. Nulla facilisi.
                    Nunc vehicula sem vel ante laoreet, in auctor dolor
                    fringilla.
                </p>
                <p className="text-gray-200 mt-4">
                    Sed in ante id est hendrerit mattis a quis ex.
                    Suspendisse eget justo vel felis vehicula egestas vel
                    at dolor. Duis fermentum varius libero, ut
                    consectetur elit venenatis nec.
                </p>
                <p className="text-gray-200 mt-4">
                    Proin viverra libero eget arcu feugiat, a tristique
                    justo sollicitudin. Etiam non lectus eu nunc egestas
                    venenatis. Aliquam erat volutpat. Duis viverra quam
                    nec urna feugiat, a tempus justo hendrerit.
                </p>
                <p className="text-gray-200 mt-4">

                    Fusce a lacinia ipsum, eu facilisis purus. Sed
                    sollicitudin ultricies ex, non tristique ipsum luctus
                    id. Maecenas sit amet turpis nec arcu sodales sodales.
                    Curabitur tristique nisi eget elit blandit, a
                    sollicitudin massa fermentum.
                </p>
                <p className="text-gray-200 mt-4">

                    Vestibulum bibendum bibendum libero, a accumsan sem
                    volutpat id. In hac habitasse platea dictumst.
                    Suspendisse sit amet augue ac quam iaculis tempus.
                    Etiam a arcu sed odio dignissim dictum.
                </p>
                <p className="text-gray-200 mt-4">

                    Nunc malesuada, metus nec fermentum finibus, erat elit
                    fermentum odio, ac volutpat justo augue nec felis.
                    Quisque vel sodales nisl, et condimentum nulla. Integer
                    aliquam feugiat lectus, eu varius leo vehicula vel.
                </p>
            </div>
        </div>
    );
}
