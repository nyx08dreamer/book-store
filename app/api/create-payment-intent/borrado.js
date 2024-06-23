
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm clientSecret={clientSecret} handleSetPaymentSuccess={handleSetPaymentSuccess}
                />
            </Elements>
        )}
        {loading && <div className="text-center">Cargando compra...</div>}{error && <div className="text-center text-rose-500">Algo ha salido mal...</div>}
        {paymentSuccess && (
            <div className="flex items-center flex-col gap-4">
                <div className="text-teal-500 text-center">Paayment Success</div>
                <div className="max-w-[220px] w-full">
                    <Button label="View Your Orders" onClick={() => router.push("/order")}/>
                </div>
            </div>
        )}


//de route

        const [existing_order, update_order] = await Promise.all([
            prisma.order.findFirst({
                where: {paymentIntentId: payment_intent_id}
            }),
            prisma.order.update({
                where: {paymentIntentId: payment_intent_id},
                data: {
                    amount: total,
                    products: items
                },
            }),
        ]);

        if(!existing_order){
            return NextResponse.json({error: "Transacción fallida"}, {status: 400})
        }
        
        return NextResponse.json({ paymentIntent: update_intent });