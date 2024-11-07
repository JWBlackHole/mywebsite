export const HL = ({children}: {children: any}) => {
    return (
      <span style={{
        fontWeight: "bold",
        textDecoration           : "underline solid #d134fdff",
        textDecorationThickness  : "3px",
        WebkitTextDecorationColor: "#d134fdff",
        WebkitTextDecorationLine : "underline",
        WebkitTextDecorationStyle: "solid"
      }}>{children}</span>
    )
}

export const Title = ({children}: {children: any}) => {
    return (
      <span
      style={{
        fontWeight: "700",
        fontSize: "clamp(2rem , 6vw, 3rem)"
      }}
      >{children}</span>
    );
}

export const SubTitle = ({children}: {children: any}) => {
    return (
      <span
      style={{
        fontWeight: "600",
        fontSize: "clamp(2rem , 5vw, 2.5rem)"
      }}
      >{children}</span>
    );
}

export const RegularText = ({children}: {children: any}) => {
  return (
    <span
    style={{
      fontWeight: "400",
      fontSize: "clamp(1.1rem , 3vw, 1.5rem)"
    }}
    >{children}</span>
  );
}