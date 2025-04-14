import { BiWorld } from "react-icons/bi";
import { FaHammer } from "react-icons/fa6";
import { HiMiniReceiptRefund } from "react-icons/hi2";
import { MdLocalShipping } from "react-icons/md";

export const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-8 mt-6 mb-16 lg:grid-cols-4 lg:gap-5">
      {/* Card 1 */}
      <div className="flex items-center gap-6">
        <MdLocalShipping size={40} className="text-slate-600" />
        <div className="space-y-1">
          <p className="font-semibold">Envío Gratis</p>
          <p className="text-sm">En todos nuestros productos</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex items-center gap-6">
        <HiMiniReceiptRefund size={40} className="text-slate-600" />
        <div className="space-y-1">
          <p className="font-semibold">Entrega Rápida</p>
          <p className="text-sm">Recibe tu pedido en 24-48 horas</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex items-center gap-6">
        <BiWorld size={40} className="text-slate-600" />
        <div className="space-y-1">
          <p className="font-semibold">Garantía de Satisfacción</p>
          <p className="text-sm">Devoluciones sin costo</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex items-center gap-6">
        <FaHammer size={40} className="text-slate-600" />
        <div className="space-y-1">
          <p className="font-semibold">Atención al Cliente</p>
          <p className="text-sm">Soporte 24/7 para resolver tus dudas</p>
        </div>
      </div>
    </div>
  );
};

